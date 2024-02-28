import { Component, useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { ADD_USER_DATA, SET_USER_INPUT, CHANGE_USER_SEARCH } from "../redux/actions";
import { Item } from "../components/Item";

export const MainApp = ({userText}) => {
  const dispatch = useDispatch();
  const { id, text, price } = useSelector((state) => state.user);
  const { data } = useSelector((state) => state.data);
  //const { search } = useSelector((state) => state.search);
  const [search, setSearch] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      //console.log(searchTerm)
      // Send Axios request here
      /*dispatch({
        type: CHANGE_USER_SEARCH,
        payload: searchTerm
      });*/
      setSearch(searchTerm);
    }, 500)

    return () => clearTimeout(delayDebounceFn)
  }, [searchTerm])

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_USER_DATA,
      payload: {id: id, text: text, price: price}
    });
    dispatch({
      type: SET_USER_INPUT,
      payload: {text: '', price: '', id: 0}
    })
  }

  const hadlerCancel = (e) => {
    e.preventDefault();
    dispatch({
      type: SET_USER_INPUT,
      payload: {text: '', price: '', id: 0}
    })
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => {
            // dispatch({
            //   type: CHANGE_USER_SEARCH,
            //   payload: e.target.value
            // });
            setSearchTerm(e.target.value);
          }}
        />
        <input
          type="text"
          required
          value={text}
          onChange={(e) => {
            dispatch({
              type: SET_USER_INPUT,
              payload: {text: e.target.value, price: price, id: id}
            });
          }}
        />
        <input
          type="number"
          required
          value={price}
          onChange={(e) => {
            dispatch({
              type: SET_USER_INPUT,
              payload: {text: text, price: e.target.value, id: id}
            });
          }}
        />
        <button>Save</button>
        {(text != '' || price != '') && <button type="button" onClick={hadlerCancel}>Cancel</button>}
      </div>
      {/* {userText} */}
      <hr/>
      {data
        .filter((obj) => (obj.text.includes(search)))
        .map((obj, idx) => <Item key={obj.id} text={obj.text} price={obj.price} id={obj.id} />)}
    </form>
  )
}

const mapStateToProps = (state, props) => {
  return {
    userText: state.user.text,
    userPrice: state.user.price,
    userId: state.user.id,
    // data: state.data,
    // search: state.search
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps,
)(MainApp);
