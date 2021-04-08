import React from 'react'
import DatePicker from 'react-datepicker'
import {useState} from 'react'

const DropDown = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
    <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
    );
}

export default DropDown
    