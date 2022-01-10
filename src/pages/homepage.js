import Banner from "../components/banner";
import NewsList from "../components/newsList";

const HomePage = {
    print() {
        return /* html */`
        <div class="container mx-auto">
            <div class="banner">
                ${Banner.print()}
            </div>
            <div class="news">
                ${NewsList.print()}
            </div>
        </div>
        `;
    },
};

export default HomePage;