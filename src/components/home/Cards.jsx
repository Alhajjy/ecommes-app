import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { IncByValue, decreament, increament } from "../store/productSlice";
import { useDispatch, useSelector } from "react-redux";
function Cards() {
    // const { counter } = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const handleIncreament = () => {
        dispatch(increament());
    };
    const handledecreament = () => {
        dispatch(decreament());
    };
    const handleIncByValue = (v) => {
        dispatch(IncByValue(v));
    };
    // useEffect(() => {
    //     console.log(initialValue);
    // }, [initialValue]);
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                </Card.Text>
                <Button onClick={handleIncreament} variant="primary">
                    Go somewhere
                </Button>
                <input type="text" />
            </Card.Body>
        </Card>
    );
}

export default Cards;
