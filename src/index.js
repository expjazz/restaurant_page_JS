/* eslint-disable import/no-cycle */
import './style.scss';
import 'bootstrap';
import renderPageOne from './pageOne';

console.log('a');
const darkModeObj = { status: false };
renderPageOne.renderPageOneFirst();

export default { darkModeObj };