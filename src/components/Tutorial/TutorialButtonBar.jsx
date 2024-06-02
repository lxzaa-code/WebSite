import './TutorialButtonBar.css';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function TutorialButtonBar() {
    return (
        <div className="Tutorial-Button-Bar">
            <div id="Handout-Button"
                onClick={() => {
                    window.location.href = "https://hfsz2313.github.io/C/#/"
                }}>
                <FaArrowLeft />
                Handout
            </div>
            <div id="Playground-Button"
                onClick={() => {
                    window.location.href = "https://godbolt.org/#g:!((g:!((g:!((h:codeEditor,i:(filename:'1',fontScale:18,fontUsePx:'0',j:1,lang:___c,selection:(endColumn:14,endLineNumber:2,positionColumn:14,positionLineNumber:2,selectionStartColumn:14,selectionStartLineNumber:2,startColumn:14,startLineNumber:2),source:'int+main(void)+%7B%0A++++return+0%3B%0A%7D'),l:'5',n:'1',o:'C+source+%231',t:'0')),header:(),k:55.55555555555556,l:'4',m:100,n:'0',o:'',s:0,t:'0'),(g:!((h:executor,i:(argsPanelShown:'1',compilationPanelShown:'0',compiler:cg141,compilerName:'',compilerOutShown:'0',execArgs:'',execStdin:'',fontScale:20,fontUsePx:'0',j:1,lang:___c,libs:!(),options:'-Wall+-Werror+-Wextra+-pedantic+-Wconversion',overrides:!(),runtimeTools:!(),source:1,stdinPanelShown:'1',wrap:'1'),l:'5',n:'0',o:'Executor+x86-64+gcc+14.1+(C,+Editor+%231)',t:'0'),(h:executor,i:(argsPanelShown:'1',compilationPanelShown:'0',compiler:cg141,compilerName:'',compilerOutShown:'0',execArgs:'',execStdin:'',fontScale:30,fontUsePx:'0',j:2,lang:___c,libs:!(),options:'',overrides:!(),runtimeTools:!(),source:1,stdinPanelShown:'1',wrap:'1'),l:'5',n:'0',o:'Executor+x86-64+gcc+14.1+(C,+Editor+%231)',t:'0')),header:(),k:44.44444444444444,l:'4',m:100,n:'0',o:'',s:0,t:'0')),l:'2',n:'0',o:'',t:'0')),version:4"
                }}>
                Playground
                <FaArrowRight />
            </div>
        </div>
    )
}

export default TutorialButtonBar;