import Banner from "../components/banner";
import News from "../components/news";

const HomePage = {
    render() {
        return /* html */`
        <div class="container mx-auto">
            <div class="banner">
                ${Banner.render()}
            </div>
            <div class="news">
                ${News.render()}
            </div>
        </div>
        `;
    },
};

export default HomePage;