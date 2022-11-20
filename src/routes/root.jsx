import { Fragment, } from "react";

const SearchForm = () => {

  return (
    <div>
      {/** react component */}
      <form id="search-form" role="search">
        <input id="q" aria-label="Search contact"
          placeholder="Search" type="search" name="q"/>
        <div id="search-spinner" aria-hidden hidden={true}/>
        <div className="sr-only" aria-live="polite"></div>
      </form>

      {/** target */}
      <form method="post">
        <button type="submit">New</button>
      </form>

    </div>

  );
}

/** Should be defined in different module? */
const NavigationBar = () => {

  return (
    <div></div>
  );
}


export default function Root() {
  
/** By organizing our routes, we can group larger modules
 * together. This part will probably be located in the #todo
 * <Header/> component and serves as the <Root/>. While going
 * through the website the content in <Main/> will primaraly
 * be the target, but <Header/> will stay relatively the same
 * as well as how our routes will be predictable. */

  return (
    <Fragment>{/** Why use { Fragment } instead of { div }? */}
      <SearchForm />{/** imported from ... */}
      <NavigationBar />{/** imported from ... */}
    </Fragment>
  );
}