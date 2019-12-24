import { routes as home } from '../views/home'
import { routes as auth } from '../modules/auth'
import { routes as series } from '../views/series'
import { routes as watchlist } from '../views/watchlist'
import { routes as showSerie } from '../views/show-serie'
import { routes as watchedlist } from '../views/watchedlist'

export default [
  ...auth,
  ...home,
  ...showSerie,
  ...watchlist,
  ...watchedlist,
  ...series
]
