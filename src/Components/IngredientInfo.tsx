import { FaTimes } from "react-icons/fa"
import { useDispatch } from "react-redux";
import { menuSliceActions } from "../store/menuSlice";


const IngredientInfo = () => {

    const dispatch = useDispatch();

    const displayIngredientInfo = () => {
    dispatch(menuSliceActions.displayIngredientInfo());
    }
    return (
        <div className="ingredient-info">
            <FaTimes onClick={displayIngredientInfo}/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, cupiditate.</p>
        </div>
    )
}

export default IngredientInfo