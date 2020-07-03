/* eslint-disable import/no-cycle */
import './style.scss';
import renderPageOne from './pageOne';

const darkModeObj = { status: false };
renderPageOne.renderPageOneFirst();

export default { darkModeObj };