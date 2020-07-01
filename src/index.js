/* eslint-disable import/no-cycle */
import './style.scss';
import 'bootstrap';
import renderPageOne from './pageOne';

const darkModeObj = { status: false };
renderPageOne.renderPageOne();

export default { darkModeObj };