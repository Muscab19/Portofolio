import { createRoot } from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import './index.css'
import Apps from './Apps'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Apps />
  </BrowserRouter>
)
