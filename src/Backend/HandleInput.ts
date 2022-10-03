import { PythonShell } from "python-shell";


function ProcessInput(stage: {
    ChooseModel: string,
    ChooseLocation: string,
    ChooseDate: string,
    ChooseAge: string,
}) {
    let options: any = {
        mode: "text",
        args: ["--mode", stage.ChooseModel, "--location", stage.ChooseLocation, "--age", stage.ChooseAge, "--date", stage.ChooseDate]
    }
    let path = 'public\\app\\FAWPredict.py';
    let result = null;
    PythonShell.run(path, options, function(err: any, results) {
       if (err) throw err;
       result = results;
    });
    return result;
}

export default ProcessInput;