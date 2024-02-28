import React from 'react'
import { connect, useDispatch } from "react-redux";
import { SET_USER_INPUT, DELETE_USER_DATA } from "../redux/actions";

export const Item = ({text, price, id}) => {
  const dispatch = useDispatch();

  const hadlerEdit = (e) => {
    e.preventDefault();
    dispatch({
      type: SET_USER_INPUT,
      payload: {text, price, id}
    })
  }

  const hadlerDelete = (e) => {
    e.preventDefault();
    dispatch({
      type: SET_USER_INPUT,
      payload: {text, price, id}
    })
    dispatch({
      type: DELETE_USER_DATA,
      payload: {text, price, id}
    })
  }

  return (
    <li className="item">
      <span>{text}</span>
      <span>{price}</span>
      <button type="button" className="edit" onClick={hadlerEdit}><img src="./src/assets/edit_FILL0_wght400_GRAD0_opsz24.svg" /></button>
      <button type="button" className="delete" onClick={hadlerDelete}><img src="./src/assets/close_FILL0_wght400_GRAD0_opsz24.svg" /></button>
    </li>
  )
}

const mapStateToProps = (state, props) => {
  return {
    text: state.user.text,
    price: state.user.price,
    id: state.user.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps,
)(Item);
