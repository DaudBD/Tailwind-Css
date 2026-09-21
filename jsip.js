<!-- ============================================================
     TMDB MOVIE FETCHER
     WAPKIZ
     TMDB ID / IMDb ID
     SUBMIT → PAGE RELOAD → AUTO FETCH → AUTO FILL
============================================================ -->

<div class="modal fade"
     id="exampleModalScrollable1"
     tabindex="-1"
     role="dialog"
     aria-labelledby="exampleModalScrollableTitle"
     aria-hidden="true">

  <div class="modal-dialog modal-dialog-scrollable modal-lg" role="document">

    <div class="modal-content">

      <!-- ======================================================
           HEADER
      ======================================================= -->

      <div class="modal-header">

        <h5 class="modal-title" id="exampleModalScrollableTitle">

          <font color="#222">
            [fm]to=:url-1(:to-fid:):,fn=1,no=movie not found||%name%[/fm]
          </font>

        </h5>

        <button type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close">

          <span aria-hidden="true">&times;</span>

        </button>

      </div>


      <!-- ======================================================
           BODY
      ======================================================= -->

      <div class="modal-body">


        <!-- ====================================================
             TMDB ID BOX
        ===================================================== -->

        <div id="tmdb-fetch-box"
             style="
               margin-bottom:15px;
               padding:12px;
               border:1px dashed #ccc;
               border-radius:6px;
               background:#f9f9f9;
             ">

          <div style="margin-bottom:6px;">
            <strong>TMDB / IMDb ID</strong>
          </div>


          <input
            type="text"
            id="tmdbMovieId"
            class="form-control"
            placeholder="Example: 550 or tt0133093"
            autocomplete="off"
            style="width:100%;"
          >


          <div
            id="tmdbStatus"
            style="
              margin-top:9px;
              font-size:13px;
              font-weight:600;
            ">
          </div>


          <!-- BACKDROP URL -->
          <div
            id="tmdbBackdropBox"
            style="
              display:none;
              margin-top:10px;
            ">

            <strong>TMDB Backdrop URL</strong>

            <input
              type="text"
              id="tmdbBackdropUrl"
              class="form-control"
              readonly
              style="margin-top:5px;"
            >

          </div>

        </div>


        <!-- ====================================================
             WAPKIZ FORM
        ===================================================== -->

        <div class="mvinfo1">

          <table
            class="table table-bordered"
            style="width:100%!important;">

            <tr>
              <th colspan="2">
                MOVIE DETAILS
              </th>
            </tr>


            [setfm]to=:url-1(:to-fid:):||


            <!-- ==================================================
                 GENRE / DURATION
            =================================================== -->

            <tr>

              <td>

                <span>Genre:</span><br/>

                <input
                  type="text"
                  name="var-genre"
                  value=":varv-genre:"
                  placeholder="eg: Action"
                >

              </td>


              <td>

                <span>Duration:</span><br/>

                <input
                  type="text"
                  name="var-duration"
                  value=":varv-duration:"
                  placeholder="Running Time"
                >

              </td>

            </tr>


            <!-- ==================================================
                 RELEASE / LANGUAGE
            =================================================== -->

            <tr>

              <td>

                <span>Release Date:</span><br/>

                <input
                  type="text"
                  name="var-rdate"
                  value=":varv-rdate:"
                  placeholder="Release Date"
                >

              </td>


              <td>

                <span>Language:</span><br/>

                <input
                  type="text"
                  name="var-language"
                  value=":varv-language:"
                  placeholder="eg: Hindi"
                >

              </td>

            </tr>


            <!-- ==================================================
                 QUALITY / IMDB
            =================================================== -->

            <tr>

              <td>

                <span>Quality:</span><br/>

                <input
                  type="text"
                  name="var-quality"
                  value=":varv-quality:"
                  placeholder="eg: HDRip"
                >

              </td>


              <td>

                <span>IMDB:</span><br/>

                <input
                  type="text"
                  name="var-imdb"
                  value=":varv-imdb:"
                  placeholder="eg: 8.2"
                >

              </td>

            </tr>


            <!-- ==================================================
                 OTT / COUNTRY
            =================================================== -->

            <tr>

              <td>

                <span>OTT Platform:</span><br/>

                <input
                  type="text"
                  name="var-ott"
                  value=":varv-ott:"
                  placeholder="eg: AMZN, Hoichoi, Chorki"
                >

              </td>


              <td>

                <span>Country:</span><br/>

                <input
                  type="text"
                  name="var-country"
                  value=":varv-country:"
                  placeholder="eg: Bangladesh, India, USA"
                >

              </td>

            </tr>


            <!-- ==================================================
                 CATEGORY
            =================================================== -->

            <tr>

              <td colspan="2">

                <span>Categories:</span><br/>

                <input
                  type="text"
                  name="var-subcategory"
                  value=":varv-subcategory:"
                  placeholder="Related category.."
                >

              </td>

            </tr>


            <!-- ==================================================
                 TAGS
            =================================================== -->

            <tr>

              <td colspan="2">

                <span>Tags:</span><br/>

                <textarea
                  name="var-tag"
                  rows="3"
                  placeholder="tag.."
                >:varv-tag:</textarea>

              </td>

            </tr>


            <!-- ==================================================
                 DIRECTOR
            =================================================== -->

            <tr>

              <td colspan="2">

                <span>Director:</span><br/>

                <textarea
                  name="var-director"
                  rows="3"
                  placeholder="Directors.."
                >:varv-director:</textarea>

              </td>

            </tr>


            <!-- ==================================================
                 STARCAST
            =================================================== -->

            <tr>

              <td colspan="2">

                <span>Starcast:</span><br/>

                <textarea
                  name="var-starcast"
                  rows="4"
                  placeholder="Starcast.."
                >:varv-starcast:</textarea>

              </td>

            </tr>


            <!-- ==================================================
                 SIZE
            =================================================== -->

            <tr>

              <td colspan="2">

                <span>Size:</span><br/>

                <input
                  type="text"
                  name="var-size"
                  value=":varv-size:"
                  placeholder="e.g. 450MB | 1GB | 2.5GB | 12GB"
                >

              </td>

            </tr>


            <!-- ==================================================
                 SUMMARY
            =================================================== -->

            <tr>

              <td colspan="2">

                <span>Summary:</span><br/>

                <textarea
                  name="var-summary"
                  rows="4"
                  placeholder="Movie Summary.."
                >:varv-summary:</textarea>

              </td>

            </tr>


            <!-- ==================================================
                 SCREENSHOT
            =================================================== -->

            <tr>

              <th colspan="2">

                SCREENSHOT

                <i
                  class="fa fa-caret-down"
                  style="float:right;color:#999">
                </i>

              </th>

            </tr>


            <tr>

              <td>

                <span>Display:</span><br/>

                <select name="var-dss">

                  <option value="No">
                    No
                  </option>

                  <option value="Yes" :varv-dss:>
                    Yes
                  </option>

                </select>

              </td>


              <td width="50%">

                <span>Screenshot:</span><br/>

                (if :varv-ss:=)

                <img
                  src="https://i2.extraimage.info/pix/2022/03/17/f2ec8ac0bd715dec06d52af2d4f25fec.jpg"
                  width="100%"
                  height="auto"
                />

                (/if)


                (if :varv-ss:~)

                <img
                  src=":varv-ss:"
                  width="100%"
                  height="auto"
                />

                (/if)

              </td>

            </tr>


            <tr>

              <td colspan="2">

                <span>Screenshot Url:</span><br/>

                <input
                  type="url"
                  name="var-ss"
                  value=":varv-ss:"
                  placeholder="Url of Screenshot"
                >

              </td>

            </tr>


            <!-- ==================================================
                 ONLINE PLAYER
            =================================================== -->

            <tr>

              <th colspan="2">

                ONLINE PLAYER

                <i
                  class="fa fa-caret-down"
                  style="float:right;color:#999">
                </i>

              </th>

            </tr>


            <tr>

              <td colspan="2">

                <span>Display:</span><br/>

                <select name="var-plyr">

                  <option value="No">
                    No
                  </option>

                  <option value="Yes" :varv-plyr:>
                    Yes
                  </option>

                </select>

              </td>

            </tr>


            <tr>

              <td colspan="2">

                <span>Poster Url:</span><br/>

                <input
                  type="text"
                  name="var-plyrposter"
                  value=":varv-plyrposter:"
                  placeholder="Poster Url"
                >

              </td>

            </tr>


            <tr>

              <td colspan="2">

                <span>Video Url:</span><br/>

                <input
                  type="url"
                  name="var-plyrvdo"
                  value=":varv-plyrvdo:"
                  placeholder="Video Url"
                >

              </td>

            </tr>


            <!-- ==================================================
                 DOWNLOAD LINK 1
            =================================================== -->

            <tr>

              <th colspan="2">

                DOWNLOAD LINK 1

                <i
                  class="fa fa-caret-down"
                  style="float:right;color:#999">
                </i>

              </th>

            </tr>


            <tr>

              <td>

                <span>Display:</span><br/>

                <select name="var-mvl1">

                  <option value="No">
                    No
                  </option>

                  <option value="Yes" :varv-mvl1:>
                    Yes
                  </option>

                </select>

              </td>


              <td>

                <span>File Size:</span><br/>

                <input
                  type="text"
                  name="var-mvsize1"
                  value=":varv-mvsize1:"
                  placeholder="File Size"
                >

              </td>

            </tr>


            <tr>

              <td colspan="2">

                <span>Download Button Text:</span><br/>

                <input
                  type="text"
                  name="var-mvtext1"
                  value=":varv-mvtext1:"
                  placeholder="Button Text"
                >

              </td>

            </tr>


            <tr>

              <td colspan="2">

                <span>Download Link:</span><br/>

                <input
                  type="url"
                  name="var-mvlink1"
                  value=":varv-mvlink1:"
                  placeholder="Download Link"
                >

              </td>

            </tr>


            <!-- ==================================================
                 DOWNLOAD LINK 2
            =================================================== -->

            <tr>

              <th colspan="2">

                DOWNLOAD LINK 2

                <i
                  class="fa fa-caret-down"
                  style="float:right;color:#999">
                </i>

              </th>

            </tr>


            <tr>

              <td>

                <span>Display:</span><br/>

                <select name="var-mvl2">

                  <option value="No">
                    No
                  </option>

                  <option value="Yes" :varv-mvl2:>
                    Yes
                  </option>

                </select>

              </td>


              <td>

                <span>File Size:</span><br/>

                <input
                  type="text"
                  name="var-mvsize2"
                  value=":varv-mvsize2:"
                  placeholder="File Size"
                >

              </td>

            </tr>


            <tr>

              <td colspan="2">

                <span>Download Button Text:</span><br/>

                <input
                  type="text"
                  name="var-mvtext2"
                  value=":varv-mvtext2:"
                  placeholder="Button Text"
                >

              </td>

            </tr>


            <tr>

              <td colspan="2">

                <span>Download Link:</span><br/>

                <input
                  type="url"
                  name="var-mvlink2"
                  value=":varv-mvlink2:"
                  placeholder="Download Link"
                >

              </td>

            </tr>


            <!-- ==================================================
                 DOWNLOAD LINK 3
            =================================================== -->

            <tr>

              <th colspan="2">

                DOWNLOAD LINK 3

                <i
                  class="fa fa-caret-down"
                  style="float:right;color:#999">
                </i>

              </th>

            </tr>


            <tr>

              <td>

                <span>Display:</span><br/>

                <select name="var-mvl3">

                  <option value="No">
                    No
                  </option>

                  <option value="Yes" :varv-mvl3:>
                    Yes
                  </option>

                </select>

              </td>


              <td>

                <span>File Size:</span><br/>

                <input
                  type="text"
                  name="var-mvsize3"
                  value=":varv-mvsize3:"
                  placeholder="File Size"
                >

              </td>

            </tr>


            <tr>

              <td colspan="2">

                <span>Download Button Text:</span><br/>

                <input
                  type="text"
                  name="var-mvtext3"
                  value=":varv-mvtext3:"
                  placeholder="Button Text"
                >

              </td>

            </tr>


            <tr>

              <td colspan="2">

                <span>Download Link:</span><br/>

                <input
                  type="url"
                  name="var-mvlink3"
                  value=":varv-mvlink3:"
                  placeholder="Download Link"
                >

              </td>

            </tr>


            <!-- ==================================================
                 DOWNLOAD LINK 4
            =================================================== -->

            <tr>

              <th colspan="2">

                DOWNLOAD LINK 4

                <i
                  class="fa fa-caret-down"
                  style="float:right;color:#999">
                </i>

              </th>

            </tr>


            <tr>

              <td>

                <span>Display:</span><br/>

                <select name="var-mvl4">

                  <option value="No">
                    No
                  </option>

                  <option value="Yes" :varv-mvl4:>
                    Yes
                  </option>

                </select>

              </td>


              <td>

                <span>File Size:</span><br/>

                <input
                  type="text"
                  name="var-mvsize4"
                  value=":varv-mvsize4:"
                  placeholder="File Size"
                >

              </td>

            </tr>


            <tr>

              <td colspan="2">

                <span>Download Button Text:</span><br/>

                <input
                  type="text"
                  name="var-mvtext4"
                  value=":varv-mvtext4:"
                  placeholder="Button Text"
                >

              </td>

            </tr>


            <tr>

              <td colspan="2">

                <span>Download Link:</span><br/>

                <input
                  type="url"
                  name="var-mvlink4"
                  value=":varv-mvlink4:"
                  placeholder="Download Link"
                >

              </td>

            </tr>


            <!-- ==================================================
                 DOWNLOAD LINK 5
            =================================================== -->

            <tr>

              <th colspan="2">

                DOWNLOAD LINK 5

                <i
                  class="fa fa-caret-down"
                  style="float:right;color:#999">
                </i>

              </th>

            </tr>


            <tr>

              <td>

                <span>Display:</span><br/>

                <select name="var-mvl5">

                  <option value="No">
                    No
                  </option>

                  <option value="Yes" :varv-mvl5:>
                    Yes
                  </option>

                </select>

              </td>


              <td>

                <span>File Size:</span><br/>

                <input
                  type="text"
                  name="var-mvsize5"
                  value=":varv-mvsize5:"
                  placeholder="File Size"
                >

              </td>

            </tr>


            <tr>

              <td colspan="2">

                <span>Download Button Text:</span><br/>

                <input
                  type="text"
                  name="var-mvtext5"
                  value=":varv-mvtext5:"
                  placeholder="Button Text"
                >

              </td>

            </tr>


            <tr>

              <td colspan="2">

                <span>Download Link:</span><br/>

                <input
                  type="url"
                  name="var-mvlink5"
                  value=":varv-mvlink5:"
                  placeholder="Download Link"
                >

              </td>

            </tr>


            <!-- ==================================================
                 SETTINGS
            =================================================== -->

            <tr>

              <th colspan="2">

                SETTINGS

                <i
                  class="fa fa-caret-down"
                  style="float:right;color:#999">
                </i>

              </th>

            </tr>


            <tr>

              <td>

                <span>Upcoming?</span><br/>

                <select name="var-upcoming">

                  <option value="No">
                    No
                  </option>

                  <option value="Yes" :varv-upcoming:>
                    Yes
                  </option>

                </select>

              </td>


              <td>

                <span>Trending?</span><br/>

                <select name="var-trending">

                  <option value="No">
                    No
                  </option>

                  <option value="Yes" :varv-trending:>
                    Yes
                  </option>

                </select>

              </td>

            </tr>


            <tr>

              <td>

                <span>Unrated?</span><br/>

                <select name="var-unrated">

                  <option value="No">
                    No
                  </option>

                  <option value="Yes" :varv-unrated:>
                    Yes
                  </option>

                </select>

              </td>


              <td>

                <span>Superhits?</span><br/>

                <select name="var-superhits">

                  <option value="No">
                    No
                  </option>

                  <option value="Yes" :varv-superhits:>
                    Yes
                  </option>

                </select>

              </td>

            </tr>


            <!-- ==================================================
                 THUMBNAIL
            =================================================== -->

            <tr>

              <td colspan="2">

                <div class="mvlistt">

                  <strong>
                    Thumbnail URL (16:9 Ratio)
                  </strong>

                  <br>

                  :var-cover:

                </div>

              </td>

            </tr>


            <!-- ==================================================
                 NOTICE
            =================================================== -->

            <tr>

              <th colspan="2">
                NOTICE
              </th>

            </tr>


            <tr>

              <td colspan="2">

                <textarea
                  name="var-notice"
                  rows="4"
                  placeholder="Any notice for the movie?"
                >:varv-notice:</textarea>

              </td>

            </tr>


            <!-- ==================================================
                 SUBMIT
            =================================================== -->

            <tr>

              <td colspan="2">

                <div style="float:right;">

                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal">
                    Close
                  </button>

                  :submit=SUBMIT:

                </div>

              </td>

            </tr>


            [/setfm]

          </table>

        </div>

      </div>

    </div>

  </div>

</div>



<!-- ============================================================
     TMDB JAVASCRIPT
============================================================ -->

<script>

(function () {

    "use strict";


    /* =========================================================
       TMDB CONFIG
    ========================================================= */

    /*
       IMPORTANT:
       Replace this with your NEW TMDB credential.
       Do not use an exposed credential.
    */

    var TMDB_API_KEY = "db096291c2f0c8c1d1081a1b2f8ca52c";


    var TMDB_IMG = "https://image.tmdb.org/t/p";

    var STORAGE_KEY = "tmdb_pending_movie_id";


    /* =========================================================
       INITIALIZE
    ========================================================= */

    function init() {

        var idInput =
            document.getElementById("tmdbMovieId");

        var statusBox =
            document.getElementById("tmdbStatus");

        var backdropBox =
            document.getElementById("tmdbBackdropBox");

        var backdropInput =
            document.getElementById("tmdbBackdropUrl");


        if (!idInput || !statusBox) {

            console.warn(
                "TMDB: Input elements not found."
            );

            return;

        }


        /* =====================================================
           STATUS
        ===================================================== */

        function setStatus(type, text) {

            var colors = {

                loading: "#2563eb",
                success: "#16a34a",
                error: "#dc2626"

            };


            var icons = {

                loading: "⏳",
                success: "✅",
                error: "❌"

            };


            statusBox.innerHTML =
                '<span style="color:' +
                colors[type] +
                ';">' +
                icons[type] +
                " " +
                text +
                "</span>";

        }


        /* =====================================================
           SET FORM FIELD
        ===================================================== */

        function setField(name, value) {

            var el =
                document.querySelector(
                    '[name="' + name + '"]'
                );


            if (!el) {

                console.warn(
                    "TMDB field not found:",
                    name
                );

                return;

            }


            el.value =
                value !== undefined &&
                value !== null
                    ? value
                    : "";


            try {

                el.dispatchEvent(
                    new Event(
                        "input",
                        {
                            bubbles: true
                        }
                    )
                );


                el.dispatchEvent(
                    new Event(
                        "change",
                        {
                            bubbles: true
                        }
                    )
                );

            } catch (e) {}

        }


        /* =====================================================
           RUNTIME FORMAT
        ===================================================== */

        function formatRuntime(minutes) {

            if (!minutes) {

                return "";

            }


            var hours =
                Math.floor(minutes / 60);

            var mins =
                minutes % 60;


            if (hours && mins) {

                return (
                    hours +
                    "h " +
                    mins +
                    "m"
                );

            }


            if (hours) {

                return hours + "h";

            }


            return mins + "m";

        }


        /* =====================================================
           UNIQUE ARRAY
        ===================================================== */

        function uniqueArray(arr) {

            var result = [];

            arr.forEach(function (item) {

                if (
                    item &&
                    result.indexOf(item) === -1
                ) {

                    result.push(item);

                }

            });


            return result;

        }


        /* =====================================================
           TMDB API REQUEST
        ===================================================== */

        function fetchJSON(url) {

            return new Promise(
                function (resolve, reject) {

                    var controller =
                        new AbortController();


                    var timeout =
                        setTimeout(
                            function () {

                                controller.abort();

                            },
                            15000
                        );


                    var separator =
                        url.indexOf("?") !== -1
                            ? "&"
                            : "?";


                    var requestURL =
                        url +
                        separator +
                        "api_key=" +
                        encodeURIComponent(
                            TMDB_API_KEY
                        );


                    fetch(
                        requestURL,
                        {
                            method: "GET",

                            headers: {
                                "Accept":
                                    "application/json"
                            },

                            signal:
                                controller.signal
                        }
                    )

                    .then(function (response) {

                        clearTimeout(timeout);


                        if (!response.ok) {

                            if (
                                response.status === 404
                            ) {

                                throw new Error(
                                    "Movie not found."
                                );

                            }


                            if (
                                response.status === 401
                            ) {

                                throw new Error(
                                    "Invalid TMDB API credential."
                                );

                            }


                            if (
                                response.status === 429
                            ) {

                                throw new Error(
                                    "TMDB request limit reached. Try again later."
                                );

                            }


                            throw new Error(
                                "TMDB HTTP " +
                                response.status
                            );

                        }


                        return response.json();

                    })

                    .then(function (data) {

                        resolve(data);

                    })

                    .catch(function (error) {

                        clearTimeout(timeout);


                        if (
                            error.name ===
                            "AbortError"
                        ) {

                            reject(
                                new Error(
                                    "TMDB request timed out."
                                )
                            );

                            return;

                        }


                        if (
                            String(
                                error.message || ""
                            ).indexOf(
                                "Failed to fetch"
                            ) !== -1
                        ) {

                            reject(
                                new Error(
                                    "Network/CORS request failed."
                                )
                            );

                            return;

                        }


                        reject(error);

                    });

                }
            );

        }


        /* =====================================================
           IMDb → TMDB ID
        ===================================================== */

        function imdbToTmdbId(imdbId) {

            return fetchJSON(

                "https://api.themoviedb.org/3/find/" +
                encodeURIComponent(imdbId) +
                "?external_source=imdb_id&language=en-US"

            )

            .then(function (result) {

                var movies =
                    result.movie_results || [];


                if (!movies.length) {

                    throw new Error(
                        "IMDb ID is not linked with a TMDB movie."
                    );

                }


                return movies[0].id;

            });

        }


        /* =====================================================
           WATCH PROVIDERS / OTT
        ===================================================== */

        function fetchProviders(movieId) {

            return fetchJSON(

                "https://api.themoviedb.org/3/movie/" +
                movieId +
                "/watch/providers"

            )

            .catch(function () {

                return null;

            });

        }


        /* =====================================================
           GET OTT NAMES
        ===================================================== */

        function getOTTNames(providers) {

            if (
                !providers ||
                !providers.results
            ) {

                return "";

            }


            /*
              Try user's common regions first.
              Then US.
            */

            var region =
                providers.results.BD ||
                providers.results.IN ||
                providers.results.US ||
                null;


            if (!region) {

                return "";

            }


            var list = [];


            if (region.flatrate) {

                list =
                    list.concat(
                        region.flatrate
                    );

            }


            if (region.buy) {

                list =
                    list.concat(
                        region.buy
                    );

            }


            if (region.rent) {

                list =
                    list.concat(
                        region.rent
                    );

            }


            var names = [];


            list.forEach(function (provider) {

                if (
                    provider &&
                    provider.provider_name
                ) {

                    names.push(
                        provider.provider_name
                    );

                }

            });


            return uniqueArray(names)
                .join(", ");

        }


        /* =====================================================
           FETCH TMDB MOVIE
        ===================================================== */

        function fetchTMDB(input) {

            return new Promise(
                function (resolve) {

                    input =
                        String(input || "")
                        .trim();


                    if (!input) {

                        setStatus(
                            "error",
                            "Please enter TMDB / IMDb ID."
                        );

                        resolve(false);

                        return;

                    }


                    setStatus(
                        "loading",
                        "Fetching TMDB data..."
                    );


                    /*
                       Correct IMDb detection:
                       tt1234567
                    */

                    var isIMDb =
                        /^tt\d+$/i.test(input);


                    var movieIdPromise;


                    if (isIMDb) {

                        setStatus(
                            "loading",
                            "Finding TMDB movie from IMDb ID..."
                        );


                        movieIdPromise =
                            imdbToTmdbId(input);

                    } else {

                        /*
                           Numeric TMDB ID
                        */

                        if (!/^\d+$/.test(input)) {

                            setStatus(
                                "error",
                                "Enter a numeric TMDB ID or valid IMDb ID."
                            );

                            resolve(false);

                            return;

                        }


                        movieIdPromise =
                            Promise.resolve(input);

                    }


                    /* =================================================
                       MOVIE DETAILS
                    ================================================= */

                    movieIdPromise

                    .then(function (movieId) {

                        setStatus(
                            "loading",
                            "TMDB ID " +
                            movieId +
                            " found. Loading movie..."
                        );


                        return Promise.all([

                            fetchJSON(
                                "https://api.themoviedb.org/3/movie/" +
                                movieId +
                                "?append_to_response=credits,external_ids&language=en-US"
                            ),

                            fetchProviders(movieId)

                        ]);

                    })


                    .then(function (result) {

                        var movie =
                            result[0];

                        var providers =
                            result[1];


                        /* =============================================
                           GENRE
                        ============================================= */

                        var genre =
                            (movie.genres || [])
                            .map(function (genre) {

                                return genre.name;

                            })
                            .join(", ");


                        setField(
                            "var-genre",
                            genre
                        );


                        /* =============================================
                           DURATION
                        ============================================= */

                        setField(
                            "var-duration",
                            formatRuntime(
                                movie.runtime
                            )
                        );


                        /* =============================================
                           RELEASE DATE
                        ============================================= */

                        setField(
                            "var-rdate",
                            movie.release_date || ""
                        );


                        /* =============================================
                           LANGUAGE
                        ============================================= */

                        var languages =
                            (movie.spoken_languages || [])
                            .map(function (language) {

                                return (
                                    language.english_name ||
                                    language.name
                                );

                            });


                        setField(
                            "var-language",
                            uniqueArray(
                                languages
                            ).join(", ")
                        );


                        /* =============================================
                           TMDB RATING
                           Your field is called IMDB, but TMDB's
                           vote_average is NOT an IMDb rating.
                        ============================================= */

                        var rating = "";

                        if (
                            typeof movie.vote_average ===
                            "number"
                        ) {

                            rating =
                                movie.vote_average
                                .toFixed(1);

                        }


                        setField(
                            "var-imdb",
                            rating
                        );


                        /* =============================================
                           COUNTRY
                        ============================================= */

                        var countries =
                            (movie.production_countries || [])
                            .map(function (country) {

                                return country.name;

                            });


                        setField(
                            "var-country",
                            uniqueArray(
                                countries
                            ).join(", ")
                        );


                        /* =============================================
                           OTT
                        ============================================= */

                        var ott =
                            getOTTNames(
                                providers
                            );


                        if (ott) {

                            setField(
                                "var-ott",
                                ott
                            );

                        }


                        /* =============================================
                           DIRECTOR
                        ============================================= */

                        var directors =
                            (
                                movie.credits &&
                                movie.credits.crew
                            )
                            ? movie.credits.crew
                                .filter(function (person) {

                                    return (
                                        person.job ===
                                        "Director"
                                    );

                                })
                                .map(function (person) {

                                    return person.name;

                                })
                            : [];


                        setField(
                            "var-director",
                            uniqueArray(
                                directors
                            ).join(", ")
                        );


                        /* =============================================
                           STARCAST
                        ============================================= */

                        var cast =
                            (
                                movie.credits &&
                                movie.credits.cast
                            )
                            ? movie.credits.cast
                                .slice(0, 15)
                                .map(function (person) {

                                    return person.name;

                                })
                            : [];


                        setField(
                            "var-starcast",
                            uniqueArray(
                                cast
                            ).join(", ")
                        );


                        /* =============================================
                           SUMMARY
                        ============================================= */

                        setField(
                            "var-summary",
                            movie.overview || ""
                        );


                        /* =============================================
                           TAGS
                        ============================================= */

                        var tags = [];


                        if (movie.title) {

                            tags.push(
                                movie.title
                            );

                        }


                        if (movie.release_date) {

                            tags.push(
                                movie.release_date
                                .substring(0, 4)
                            );

                        }


                        genre
                        .split(",")
                        .forEach(function (item) {

                            item =
                                item.trim();


                            if (item) {

                                tags.push(item);

                            }

                        });


                        setField(
                            "var-tag",
                            uniqueArray(tags)
                            .join(", ")
                        );


                        /* =============================================
                           POSTER
                        ============================================= */

                        var posterURL = "";


                        if (movie.poster_path) {

                            posterURL =
                                TMDB_IMG +
                                "/w780" +
                                movie.poster_path;

                        }


                        setField(
                            "var-plyrposter",
                            posterURL
                        );


                        /* =============================================
                           BACKDROP
                        ============================================= */

                        var backdropURL = "";


                        if (movie.backdrop_path) {

                            backdropURL =
                                TMDB_IMG +
                                "/w1280" +
                                movie.backdrop_path;

                        }


                        /*
                           Current Wapkiz form does not have:

                           <input name="var-cover">

                           So we display the backdrop URL separately.
                        */

                        if (
                            backdropURL &&
                            backdropBox &&
                            backdropInput
                        ) {

                            backdropInput.value =
                                backdropURL;

                            backdropBox.style.display =
                                "block";

                        }


                        /* =============================================
                           SAVE BACKDROP FOR NEXT PAGE
                        ============================================= */

                        try {

                            if (backdropURL) {

                                localStorage.setItem(
                                    "tmdb_backdrop_url",
                                    backdropURL
                                );

                            }

                        } catch (e) {}


                        /* =============================================
                           SAVE TMDB ID
                        ============================================= */

                        try {

                            localStorage.setItem(
                                "tmdb_last_id",
                                String(movie.id)
                            );

                        } catch (e) {}


                        /* =============================================
                           COMPLETE
                        ============================================= */

                        var year = "";

                        if (movie.release_date) {

                            year =
                                movie.release_date
                                .substring(0, 4);

                        }


                        setStatus(
                            "success",

                            "Complete! " +
                            (movie.title || "Movie") +
                            (year
                                ? " (" + year + ")"
                                : "") +
                            " — TMDB ID: " +
                            movie.id

                        );


                        console.log(
                            "TMDB Movie:",
                            movie
                        );


                        resolve(true);

                    })


                    .catch(function (error) {

                        console.error(
                            "TMDB ERROR:",
                            error
                        );


                        setStatus(
                            "error",
                            error.message ||
                            "TMDB fetch failed."
                        );


                        resolve(false);

                    });

                }
            );

        }


        /* =========================================================
           PAGE RELOAD
           CHECK PENDING TMDB ID
        ========================================================= */

        var pendingID = null;


        try {

            pendingID =
                localStorage.getItem(
                    STORAGE_KEY
                );

        } catch (e) {}


        if (pendingID) {

            /*
               Put ID back in input
            */

            idInput.value =
                pendingID;


            /*
               Remove immediately so it doesn't
               fetch repeatedly.
            */

            try {

                localStorage.removeItem(
                    STORAGE_KEY
                );

            } catch (e) {}


            /*
               Wait for Wapkiz DOM
            */

            setTimeout(
                function () {

                    fetchTMDB(
                        pendingID
                    );

                },
                1000
            );

        }


        /* =========================================================
           SAVE ID BEFORE SUBMIT
        ========================================================= */

        function savePendingID() {

            var id =
                idInput.value.trim();


            if (!id) {

                return;

            }


            try {

                localStorage.setItem(
                    STORAGE_KEY,
                    id
                );


                console.log(
                    "TMDB ID saved:",
                    id
                );

            } catch (e) {

                console.warn(
                    "localStorage error:",
                    e
                );

            }

        }


        /* =========================================================
           DETECT FORM SUBMIT
        ========================================================= */

        document.addEventListener(
            "submit",
            function () {

                savePendingID();

            },
            true
        );


        /* =========================================================
           CLICK DETECTION
        ========================================================= */

        document.addEventListener(
            "click",
            function (event) {

                var target =
                    event.target;


                if (!target) {

                    return;

                }


                /*
                   Find nearest clickable element
                */

                var element =
                    target.closest
                    ? target.closest(
                        "button,input"
                    )
                    : target;


                if (!element) {

                    return;

                }


                var modal =
                    document.getElementById(
                        "exampleModalScrollable1"
                    );


                if (
                    !modal ||
                    !modal.contains(element)
                ) {

                    return;

                }


                var tag =
                    (
                        element.tagName ||
                        ""
                    ).toLowerCase();


                var type =
                    (
                        element.type ||
                        ""
                    ).toLowerCase();


                var value =
                    String(
                        element.value ||
                        ""
                    ).toLowerCase();


                /*
                   IMPORTANT:

                   Don't save when Fetch TMDB
                   button is clicked.
                */

                if (
                    element.id ===
                    "fetchTmdbBtn"
                ) {

                    return;

                }


                /*
                   Detect submit
                */

                if (

                    type === "submit" ||

                    value === "submit" ||

                    value === "go" ||

                    value === "save" ||

                    value === "update"

                ) {

                    savePendingID();

                }

            },
            true
        );


        /* =========================================================
           BEFORE PAGE LEAVES
        ========================================================= */

        window.addEventListener(
            "beforeunload",
            function () {

                var id =
                    idInput.value.trim();


                if (!id) {

                    return;

                }


                try {

                    localStorage.setItem(
                        STORAGE_KEY,
                        id
                    );

                } catch (e) {}

            }
        );


        /* =========================================================
           ENTER KEY
        ========================================================= */

        idInput.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key ===
                    "Enter"
                ) {

                    /*
                       Enter will save ID.
                       It does not automatically submit.
                    */

                    savePendingID();

                }

            }
        );


        /* =========================================================
           OPTIONAL: FETCH WHEN ID CHANGED
        ========================================================= */

        /*
           No automatic fetch here.

           User's flow is:

           ID → SUBMIT → reload → auto fetch
        */


        console.log(
            "TMDB Auto Fetch initialized."
        );

    }


    /* =========================================================
       DOM READY
    ========================================================= */

    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            init
        );

    } else {

        init();

    }


})();

</script>