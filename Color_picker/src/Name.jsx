import {useState} from "react"
function Name()
{
    const [quantity, setQuantity] = useState(1);

    const [comment, setComment] = useState("");

    const [payment, setPayment] = useState("");

    const handleChange = (e)=>
    {
        setPayment(e.target.value)
    }

    return(
        <>

            <select value={payment} onChange={handleChange}>
                <option value="">Select an option</option>
                <option value="Mastercard">MasterCard</option>
                <option value="Visa">Visa</option>
                <option value="Giftcard">GiftCard</option>
            </select>
            <p>
                Payment: {payment}
            </p>
        </>
    )

}
export default Name;