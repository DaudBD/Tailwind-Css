
<!-- ============================================================
TMDB JAVASCRIPT
============================================================ -->
<script>
(function () {
  "use strict";

  /* =========================================================
   TMDB CONFIG
   ========================================================= */
  /* IMPORTANT: Replace this with your NEW TMDB credential.
     Do not use an exposed credential. */
  var TMDB_API_KEY = "db096291c2f0c8c1d1081a1b2f8ca52c";
  var TMDB_IMG = "https://image.tmdb.org/t/p";
  var STORAGE_KEY = "tmdb_pending_movie_id";

  /* =========================================================
   INITIALIZE
   ========================================================= */
  function init() {
    var idInput = document.getElementById("tmdbMovieId");
    var statusBox = document.getElementById("tmdbStatus");
    var backdropBox = document.getElementById("tmdbBackdropBox");
    var backdropInput = document.getElementById("tmdbBackdropUrl");

    if (!idInput || !statusBox) {
      console.warn("TMDB: Input elements not found.");
      return;
    }

    /* =====================================================
     STATUS
     ===================================================== */
    function setStatus(type, text) {
      var colors = { loading: "#2563eb", success: "#16a34a", error: "#dc2626" };
      var icons = { loading: "⏳", success: "✅", error: "❌" };
      statusBox.innerHTML =
        '<span style="color:' + colors[type] + ';">' + icons[type] + " " + text + "</span>";
    }

    /* =====================================================
     SET FORM FIELD
     ===================================================== */
    function setField(name, value) {
      var el = document.querySelector('[name="' + name + '"]');
      if (!el) {
        console.warn("TMDB field not found:", name);
        return;
      }
      el.value = value !== undefined && value !== null ? value : "";
      try {
        el.dispatchEvent(new Event("input", { bubbles: true }));
        el.dispatchEvent(new Event("change", { bubbles: true }));
      } catch (e) {}
    }

    /* =====================================================
     RUNTIME FORMAT
     ===================================================== */
    function formatRuntime(minutes) {
      if (!minutes) { return ""; }
      var hours = Math.floor(minutes / 60);
      var mins = minutes % 60;
      if (hours && mins) { return hours + "h " + mins + "m"; }
      if (hours) { return hours + "h"; }
      return mins + "m";
    }

    /* =====================================================
     UNIQUE ARRAY
     ===================================================== */
    function uniqueArray(arr) {
      var result = [];
      arr.forEach(function (item) {
        if (item && result.indexOf(item) === -1) {
          result.push(item);
        }
      });
      return result;
    }

    /* =====================================================
     TMDB API REQUEST
     ===================================================== */
    function fetchJSON(url) {
      return new Promise(function (resolve, reject) {
        var controller = new AbortController();
        var timeout = setTimeout(function () { controller.abort(); }, 15000);

        var separator = url.indexOf("?") !== -1 ? "&" : "?";
        var requestURL = url + separator + "api_key=" + encodeURIComponent(TMDB_API_KEY);

        fetch(requestURL, {
          method: "GET",
          headers: { "Accept": "application/json" },
          signal: controller.signal
        })
          .then(function (response) {
            clearTimeout(timeout);
            if (!response.ok) {
              if (response.status === 404) { throw new Error("Movie not found."); }
              if (response.status === 401) { throw new Error("Invalid TMDB API credential."); }
              if (response.status === 429) { throw new Error("TMDB request limit reached. Try again later."); }
              throw new Error("TMDB HTTP " + response.status);
            }
            return response.json();
          })
          .then(function (data) { resolve(data); })
          .catch(function (error) {
            clearTimeout(timeout);
            if (error.name === "AbortError") {
              reject(new Error("TMDB request timed out."));
              return;
            }
            if (String(error.message || "").indexOf("Failed to fetch") !== -1) {
              reject(new Error("Network/CORS request failed."));
              return;
            }
            reject(error);
          });
      });
    }

    /* =====================================================
     IMDb → TMDB ID
     ===================================================== */
    function imdbToTmdbId(imdbId) {
      return fetchJSON(
        "https://api.themoviedb.org/3/find/" + encodeURIComponent(imdbId) + "?external_source=imdb_id&language=en-US"
      ).then(function (result) {
        var movies = result.movie_results || [];
        if (!movies.length) {
          throw new Error("IMDb ID is not linked with a TMDB movie.");
        }
        return movies[0].id;
      });
    }

    /* =====================================================
     WATCH PROVIDERS / OTT
     ===================================================== */
    function fetchProviders(movieId) {
      return fetchJSON("https://api.themoviedb.org/3/movie/" + movieId + "/watch/providers")
        .catch(function () { return null; });
    }

    /* =====================================================
     GET OTT NAMES
     ===================================================== */
    function getOTTNames(providers) {
      if (!providers || !providers.results) { return ""; }

      /* Try user's common regions first. Then US. */
      var region = providers.results.BD || providers.results.IN || providers.results.US || null;
      if (!region) { return ""; }

      var list = [];
      if (region.flatrate) { list = list.concat(region.flatrate); }
      if (region.buy) { list = list.concat(region.buy); }
      if (region.rent) { list = list.concat(region.rent); }

      var names = [];
      list.forEach(function (provider) {
        if (provider && provider.provider_name) {
          names.push(provider.provider_name);
        }
      });

      return uniqueArray(names).join(", ");
    }

    /* =====================================================
     FETCH TMDB MOVIE
     ===================================================== */
    function fetchTMDB(input) {
      return new Promise(function (resolve) {
        input = String(input || "").trim();

        if (!input) {
          setStatus("error", "Please enter TMDB / IMDb ID.");
          resolve(false);
          return;
        }

        setStatus("loading", "Fetching TMDB data...");

        /* Correct IMDb detection: tt1234567
           FIX: was /^ttd+$/i (literal "d"), now properly /^tt\d+$/i (digit) */
        var isIMDb = /^tt\d+$/i.test(input);

        var movieIdPromise;

        if (isIMDb) {
          setStatus("loading", "Finding TMDB movie from IMDb ID...");
          movieIdPromise = imdbToTmdbId(input);
        } else {
          /* Numeric TMDB ID
             FIX: was /^d+$/ (literal "d"), now properly /^\d+$/ (digit) */
          if (!/^\d+$/.test(input)) {
            setStatus("error", "Enter a numeric TMDB ID or valid IMDb ID.");
            resolve(false);
            return;
          }
          movieIdPromise = Promise.resolve(input);
        }

        /* =================================================
         MOVIE DETAILS
         ================================================= */
        movieIdPromise
          .then(function (movieId) {
            setStatus("loading", "TMDB ID " + movieId + " found. Loading movie...");
            return Promise.all([
              fetchJSON(
                "https://api.themoviedb.org/3/movie/" + movieId + "?append_to_response=credits,external_ids&language=en-US"
              ),
              fetchProviders(movieId)
            ]);
          })
          .then(function (result) {
            var movie = result[0];
            var providers = result[1];

            /* ============================================= GENRE ============================================= */
            var genre = (movie.genres || []).map(function (genre) { return genre.name; }).join(", ");
            setField("var-genre", genre);

            /* ============================================= DURATION ============================================= */
            setField("var-duration", formatRuntime(movie.runtime));

            /* ============================================= RELEASE DATE ============================================= */
            setField("var-rdate", movie.release_date || "");

            /* ============================================= LANGUAGE ============================================= */
            var languages = (movie.spoken_languages || []).map(function (language) {
              return language.english_name || language.name;
            });
            setField("var-language", uniqueArray(languages).join(", "));

            /* ============================================= TMDB RATING
               Your field is called IMDB, but TMDB's vote_average is NOT an IMDb rating.
               ============================================= */
            var rating = "";
            if (typeof movie.vote_average === "number") {
              rating = movie.vote_average.toFixed(1);
            }
            setField("var-imdb", rating);

            /* ============================================= COUNTRY ============================================= */
            var countries = (movie.production_countries || []).map(function (country) { return country.name; });
            setField("var-country", uniqueArray(countries).join(", "));

            /* ============================================= OTT ============================================= */
            var ott = getOTTNames(providers);
            if (ott) { setField("var-ott", ott); }

            /* ============================================= DIRECTOR ============================================= */
            var directors = (movie.credits && movie.credits.crew)
              ? movie.credits.crew.filter(function (person) { return person.job === "Director"; })
                  .map(function (person) { return person.name; })
              : [];
            setField("var-director", uniqueArray(directors).join(", "));

            /* ============================================= STARCAST ============================================= */
            var cast = (movie.credits && movie.credits.cast)
              ? movie.credits.cast.slice(0, 15).map(function (person) { return person.name; })
              : [];
            setField("var-starcast", uniqueArray(cast).join(", "));

            /* ============================================= SUMMARY ============================================= */
            setField("var-summary", movie.overview || "");

            /* ============================================= TAGS ============================================= */
            var tags = [];
            if (movie.title) { tags.push(movie.title); }
            if (movie.release_date) { tags.push(movie.release_date.substring(0, 4)); }
            genre.split(",").forEach(function (item) {
              item = item.trim();
              if (item) { tags.push(item); }
            });
            setField("var-tag", uniqueArray(tags).join(", "));

            /* ============================================= POSTER ============================================= */
            var posterURL = "";
            if (movie.poster_path) { posterURL = TMDB_IMG + "/w780" + movie.poster_path; }
            setField("var-plyrposter", posterURL);

            /* ============================================= BACKDROP ============================================= */
            var backdropURL = "";
            if (movie.backdrop_path) { backdropURL = TMDB_IMG + "/w1280" + movie.backdrop_path; }

            /* Current Wapkiz form does not have: <input name="var-cover">
               So we display the backdrop URL separately. */
            if (backdropURL && backdropBox && backdropInput) {
              backdropInput.value = backdropURL;
              backdropBox.style.display = "block";
            }

            /* ============================================= SAVE BACKDROP FOR NEXT PAGE ============================================= */
            try {
              if (backdropURL) { localStorage.setItem("tmdb_backdrop_url", backdropURL); }
            } catch (e) {}

            /* ============================================= SAVE TMDB ID ============================================= */
            try {
              localStorage.setItem("tmdb_last_id", String(movie.id));
            } catch (e) {}

            /* ============================================= COMPLETE ============================================= */
            var year = "";
            if (movie.release_date) { year = movie.release_date.substring(0, 4); }

            setStatus(
              "success",
              "Complete! " + (movie.title || "Movie") + (year ? " (" + year + ")" : "") + " — TMDB ID: " + movie.id
            );
            console.log("TMDB Movie:", movie);
            resolve(true);
          })
          .catch(function (error) {
            console.error("TMDB ERROR:", error);
            setStatus("error", error.message || "TMDB fetch failed.");
            resolve(false);
          });
      });
    }

    /* =========================================================
     PAGE RELOAD CHECK — PENDING TMDB ID
     ========================================================= */
    var pendingID = null;
    try { pendingID = localStorage.getItem(STORAGE_KEY); } catch (e) {}

    if (pendingID) {
      /* Put ID back in input */
      idInput.value = pendingID;

      /* Remove immediately so it doesn't fetch repeatedly. */
      try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}

      /* Wait for Wapkiz DOM */
      setTimeout(function () { fetchTMDB(pendingID); }, 1000);
    }

    /* =========================================================
     SAVE ID BEFORE SUBMIT
     ========================================================= */
    function savePendingID() {
      var id = idInput.value.trim();
      if (!id) { return; }
      try {
        localStorage.setItem(STORAGE_KEY, id);
        console.log("TMDB ID saved:", id);
      } catch (e) {
        console.warn("localStorage error:", e);
      }
    }

    /* =========================================================
     DETECT FORM SUBMIT
     ========================================================= */
    document.addEventListener("submit", function () { savePendingID(); }, true);

    /* =========================================================
     CLICK DETECTION
     ========================================================= */
    document.addEventListener("click", function (event) {
      var target = event.target;
      if (!target) { return; }

      /* Find nearest clickable element */
      var element = target.closest ? target.closest("button,input") : target;
      if (!element) { return; }

      var modal = document.getElementById("exampleModalScrollable1");
      if (!modal || !modal.contains(element)) { return; }

      var tag = (element.tagName || "").toLowerCase();
      var type = (element.type || "").toLowerCase();
      var value = String(element.value || "").toLowerCase();

      /* IMPORTANT: Don't save when Fetch TMDB button is clicked. */
      if (element.id === "fetchTmdbBtn") { return; }

      /* Detect submit */
      if (type === "submit" || value === "submit" || value === "go" || value === "save" || value === "update") {
        savePendingID();
      }
    }, true);

    /* =========================================================
     BEFORE PAGE LEAVES
     ========================================================= */
    window.addEventListener("beforeunload", function () {
      var id = idInput.value.trim();
      if (!id) { return; }
      try { localStorage.setItem(STORAGE_KEY, id); } catch (e) {}
    });

    /* =========================================================
     ENTER KEY
     ========================================================= */
    idInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        /* Enter will save ID. It does not automatically submit. */
        savePendingID();
      }
    });

    /* =========================================================
     OPTIONAL: FETCH WHEN ID CHANGED
     ========================================================= */
    /* No automatic fetch here. User's flow is: ID → SUBMIT → reload → auto fetch */

    console.log("TMDB Auto Fetch initialized.");
  }

  /* =========================================================
   DOM READY
   ========================================================= */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
</script>
