import React from "react";
import "./Article.css"
import CardsImage from "./../CardsImage/CardsImage";
import responsiveImageUrl from "../../static/img/responsive-design.png"
import risetUxImageUrl from "../../static/img/kekuatan-rise-ux.png"
import aksebilitasUxImgUrl from "../../static/img/aksebilitas-ux.png"


class Article extends React.Component {
    render () {

        const arrayImageUrl = [ 
            {
                "imageUrl" : responsiveImageUrl, 
                "title" :"Design", 
                "project" : "Optimasi Konversi melalui Desain Responsif yang Unggul"
            },
            {
                "imageUrl" : risetUxImageUrl, 
                "title" : "Business",
                "project":"Eksplorasi Epik: Bagaimana Riset UX Memberi Bentuk pada Strategi Bisnis"
            },
            {
                "imageUrl" : aksebilitasUxImgUrl, 
                "title" : "Design",
                "project" :"Memikat Pandangan: Panduan Meningkatkan Aksesibilitas dalam Pengalaman Pengguna"}
        ]

        const renderCardsArticle = arrayImageUrl.map((content) => (
            <CardsImage isArticle={true} title={content.title} project={content.project} imageUrl={content.imageUrl}/>
        ))

        return (
            <div className="container" id="wrapper-container">
                <div className="row mt-5 pt-3 mb-2">
                    <span id="title-read">Read Our Latest News & Article</span>
                </div>
                <div className="row mt-5">
                    <div className="wrapper-reads" style={{width:"60%"}}>
                        <div id="rounded-orange" class="type-article">
                            All News & Blog
                        </div>
                        <div class="type-article">
                            Design
                        </div>
                        <div class="type-article">
                            Technology
                        </div>
                        <div class="type-article">
                            Business
                        </div>
                        <div class="type-article">
                            Website
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="wrapper-article-cards">
                        {renderCardsArticle}
                    </div>
                </div>
            </div>
        )
    }
}

export default Article;