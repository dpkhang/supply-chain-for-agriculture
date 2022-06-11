import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { menuControlSelector } from '../../../redux/selectors/menu-control.selector';
import { MenuControlSlice } from '../../../redux/slice/menu-control.slice';
import $ from 'jquery';
import "./background.scss";

const Background = () => {
    const dispatch = useDispatch()
    const isShowMenu = useSelector(menuControlSelector)
    //------state-------//
    const [isShowBackGround, setIsShowBackGround] = useState(() => {
        const widthScreen = $(window).width() as number
        return widthScreen < 1400
    })

    //------handle------//
    $(window).resize(() => {
        const widthScreen = $(window).width() as number
        setIsShowBackGround( widthScreen < 1400 )
    })

    //function handle click to background
    const ClickBackGround = () => {
        dispatch(
            MenuControlSlice.actions.updateShowMenu(false)
        )
    }

    return (
        <div 
            className={(isShowBackGround && isShowMenu) ? 'background-wrapper' : ''}
            onClick={ClickBackGround}
        >
        </div>
    );
};

export default Background;