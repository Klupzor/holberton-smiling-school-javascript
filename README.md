# holberton-smiling-school-javascript
===================================


Here the final result:

![](./images/readme/finalview.jpg)

Tasks
-----

#### 1\. Homepage - quotes

From `0-homepage.html`, create `1-homepage.html`.

Replace static quotes by dynamic loading:

-   URL: `https://smileschool-api.hbtn.info/quotes`
-   No static quotes should be present in the quotes section
-   During the Ajax request, a loader should be present
-   Carousel should work like before

Example of my loader:

```
HTML:
<div class="loader"></div>

CSS:
.loader {
    border: 10px solid #f3f3f3;
    border-top: 10px solid #C271FF;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    animation: spin 2s linear infinite;
    margin: auto;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

```

Final result:

![](images/readme/1-homepage.gif)

#### 2\. Homepage - popular tutorials

From `1-homepage.html`, create `2-homepage.html`.

Replace static video cards by dynamic loading:

-   URL: `https://smileschool-api.hbtn.info/popular-tutorials`
-   No static video cards should be present in the section
-   During the Ajax request, a loader should be present
-   Carousel should work by sliding card by card (like GIF below) - this kind of carousel is not unique, make it generic to reuse it easily!
-   Don't forget the responsive part!

Final result:

![](images/readme/2-homepage.gif)

#### 3\. Homepage - latest videos

From `2-homepage.html`, create `homepage.html`.

Replace static video card by dynamic loading:

-   URL: `https://smileschool-api.hbtn.info/latest-videos`
-   No static video cards should be present in the section
-   During the Ajax request, a loader should be present
-   Carousel should work by sliding card by card (like GIF below) - this kind of carousel is not unique, make it generic to reuse it easily!
-   Don't forget the responsive part!

Final result:

![](images/readme/homepage.gif)


#### 4\. Pricing - quotes

From `0-pricing.html`, create `pricing.html`.

Replace static quotes by dynamic loading:

-   URL: `https://smileschool-api.hbtn.info/quotes`
-   No static quotes should be present in the quotes section
-   During the Ajax request, a loader should be present
-   Carousel should work like before

Same as the `homepage.html`

#### 5\. Courses

From `0-courses.html`, create `courses.html`.

Replace static video card by dynamic loading:

-   URL: `https://smileschool-api.hbtn.info/courses`
    -   `GET` parameters:
        -   `q`: search value (in our case, the value of the field KEYWORDS)
        -   `topic`: topic filter value (in our case, the value of the field TOPICS)
        -   `sort`: order of all courses (in our case, the value of the field SORT BY)
-   No static video cards should be present in the section
-   During the Ajax request, a loader should be present
-   Dropdowns are dynamic (coming from the API):
    -   Topic: list of `topics`
    -   Sort by: list of `sorts`
-   Search value should be initialized by the value `q` in the API response
-   The list of video cards is coming from `courses` in the API response
-   API request must be done when:
    -   Search value is changing
    -   A new Topic is selected
    -   A new Sort by is selected

![](images/readme/courses.gif)
