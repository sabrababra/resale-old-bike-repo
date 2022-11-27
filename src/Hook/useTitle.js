import { useEffect } from "react";


const UseTitle=(title)=>{
    useEffect(()=>{
        document.title=`${title}-Resale bike`;
    },[title])
}
export default UseTitle;