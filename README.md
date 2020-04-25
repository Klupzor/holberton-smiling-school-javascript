# holberton-smiling-school-javascript
===================================


Here the final result:

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/3c71cc99d2fc1c12a3d3.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20200425%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200425T151028Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=2a626ee71ff4e09db29495acf0546be1a9ac868e8d7c64ece7f8064ecbada843)

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

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/4/044058b378bfef994b7c9dd672de1dca33d5f576.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20200425%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200425T151028Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=279436653ce75f8e968c2ddb9918695029ce77c98d35fd93f254fc93108d0dcf)

#### 2\. Homepage - popular tutorials

From `1-homepage.html`, create `2-homepage.html`.

Replace static video cards by dynamic loading:

-   URL: `https://smileschool-api.hbtn.info/popular-tutorials`
-   No static video cards should be present in the section
-   During the Ajax request, a loader should be present
-   Carousel should work by sliding card by card (like GIF below) - this kind of carousel is not unique, make it generic to reuse it easily!
-   Don't forget the responsive part!

Final result:

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/4/0efb5ff68c622f830a70e7aaf16bac87822462af.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20200425%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200425T151028Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=0571fe1718ce5a4ab72d6a84b15ce7ade3278012029fc5f66bd79181d990f41b)

#### 3\. Homepage - latest videos

From `2-homepage.html`, create `homepage.html`.

Replace static video card by dynamic loading:

-   URL: `https://smileschool-api.hbtn.info/latest-videos`
-   No static video cards should be present in the section
-   During the Ajax request, a loader should be present
-   Carousel should work by sliding card by card (like GIF below) - this kind of carousel is not unique, make it generic to reuse it easily!
-   Don't forget the responsive part!

Final result:

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/4/c9a421edef604cee434f02f26328f6a549abd81a.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20200425%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200425T151028Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=65bccf8779b3d26eef09515b6ffc59d6b9222864890d45f0df0d01134ab96c3d)


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

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/4/b081f3358ab5e79f44afc847d882bcf6fd5ef517.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20200425%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200425T151028Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=4ba71aee71658a664c98583688a46f5a91221b201c7077a7f9b1f76560ad3237)
