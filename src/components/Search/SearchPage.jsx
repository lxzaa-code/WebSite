import ReturnMainPage from '../mess/ReturnMainPage';
import Search from '../Nav/Search';
import PageLanguageButton from './PageLanguageButton';
import './SearchPage.css';
function SearchPage() {
    return (
        <div className="SearchPage">
            <ReturnMainPage />
            <div className="SearchTop">
                <h1>搜索结果：<span>mdr</span></h1>
                <div className="SearchComment">
                    <p>注：搜索结果分三列显示：</p>
                    <p>第一列是 MCT 中的搜索结果（MCT 中每篇文章都有对应的关键词权重）</p>
                    <p>第二列是 C++ Reference 中的搜索结果：<PageLanguageButton /></p>
                    <p>第三列是 Google 中的搜索结果。</p>
                </div>
                <Search />
            </div>
            <div className="SearchResult">
                <div className="ResultMCT">
                    <div className="ResultBlock">
                        1
                    </div>
                </div>
                <div className="ResultCppRef">
                    <div className="ResultBlock">
                        <h1>1</h1>
                        1
                    </div>
                    <div className="ResultBlock">1</div>
                    <div className="ResultBlock">1</div>
                </div>
                <div className="ResultGoogle">
                    <div className="ResultBlock">1</div>
                    <div className="ResultBlock">1</div>
                    <div className="ResultBlock">1</div>
                </div>
            </div>
        </div>
    )
}
export default SearchPage;