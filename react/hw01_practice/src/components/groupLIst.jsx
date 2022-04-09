import React from 'react'
import PropTypes from 'prop-types'

const professionsArray = [
    { _id: "67rdca3eeb7f6fgeed471818", name: "Доктор" },
    { _id: "67rdca3eeb7f6fgeed471820", name: "Официант" },
    { _id: "67rdca3eeb7f6fgeed471814", name: "Физик" },
    { _id: "67rdca3eeb7f6fgeed471822", name: "Инженер" },
    { _id: "67rdca3eeb7f6fgeed471824", name: "Актер" },
    { _id: "67rdca3eeb7f6fgeed471829", name: "Повар" }
];

const GroupList = ({items, valueProperty, contentProperty, onItemSelect, selectedItem}) => {
    return (
        <ul className='list-group'>
            {professionsArray.forEach((item) =>{
                <li
                    key={item._id.valueProperty}
                    className={'list-group-item'+ item===selectedItem? " active": " "}
                    onClick={() => onItemSelect(item)}
                    role="button"
                >
                    {item.name}
                </li>
                                    console.log(item.name);
            })}
            {/* {Object.keys(items).map((item) => (
                <li 
                    key={items[item][valueProperty]} 
                    className={'list-group-item'+(items[item]===selectedItem? " active": " ")}
                    onClick={() => onItemSelect(items[item])}
                    role="button"
                >
                    {items[item][contentProperty]}
                </li>
            ))} */}
        </ul>
    )
}
GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};
GroupList.propTypes= {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func,
    selectedItem: PropTypes.object,
};

export default GroupList