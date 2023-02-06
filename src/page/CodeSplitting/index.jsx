// Utilities
// regular import
// import { showWelcome } from "./index.utils";
export const CodeSplitting = () => {

    function handleClick() {
        // dynamic import
        import("./index.utils").then(module =>{

            console.log("module", module)
            module.showWelcome();
            module.default();
        })
    }

    return <div>Code Splitting

        <button onClick={handleClick}>click me</button>
    </div>
};

export default CodeSplitting