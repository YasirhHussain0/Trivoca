import { useNavigate, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

function useScrollToSection(){
    const navigate= useNavigate();
    const location=useLocation();

    const useScrollToSection=(sectionId)=>{
        if(location.pathname !== "/"){
            navigate("/");
            setTimeout(()=>{
                scroller.scrollTo(sectionId,{
                    duration: 500,
                    smooth: true,
                    offset: -70,
                });
            },100);
        }else{
            scroller.scrollTo(sectionId,{
                duration: 500,
                smooth: true,
                offset: -70,
            });
        }
    }
    return useScrollToSection;
}
export default useScrollToSection;