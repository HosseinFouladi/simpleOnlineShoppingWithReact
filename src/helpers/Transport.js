import { useHistory } from "react-router-dom";

const useGoto=url=>{

    const history=useHistory();

    const goto=()=>{
        history.push(url);
    }

    return goto;
}

export default useGoto;