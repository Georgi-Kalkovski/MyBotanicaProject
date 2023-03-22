import React from "react";
import { splitMonths, monthsNames, monthsTemplate } from "./Functions";
import "./Calendar.css";
import { calendarSVG } from './SvgImports';

function Calendar({ plant }) {
    const growthM = splitMonths(plant.growth_months);
    const bloomM = splitMonths(plant.bloom_months);
    const fruitM = splitMonths(plant.fruit_months);

    return (
        <>
            <div id="calendar">
                <h2>
                    <img className='svg' src={calendarSVG} alt="calendarSvg" />
                    <span> Calendar</span>
                </h2>
                <table className="calendar-table">
                    <thead>
                        <tr>
                            <th></th>
                            {monthsNames()}
                        </tr>
                    </thead>
                    <tbody>
                        {growthM.length > 0 ? <tr class="row-growth">{monthsTemplate({ name: 'Growing', arr: growthM })}</tr> : ''}
                        {bloomM.length > 0 ? <tr class="row-bloom">{monthsTemplate({ name: 'Blooming', arr: bloomM })}</tr> : ''}
                        {fruitM.length > 0 ? <tr class="row-fruit">{monthsTemplate({ name: 'Fruits', arr: fruitM })}</tr> : ''}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Calendar;