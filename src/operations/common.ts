/**
 * Function that gets a string with special characters, removes the special characters
 * and returns a string without all the mentioned special characters.
 * 
 * This function is used to remove the hyphens from the paths mentioned in the browser url.
 * This removed 
 * 
 * @param improper_name - string with special characters
 * @param split_by - the special characters that ought to be removed from the string.
 * @returns - string without the special characters
 */
export const getProperName = (improper_name: string, split_by: string) => 
  improper_name.split(split_by).map(item => item.charAt(0).toUpperCase() + item.slice(1)).join(" ");

/**
 * Function that determines the theme of the app based on the previous choice 
 * selected by the user.
 * 
 * @returns "dark" or "light" based on the existing theme selected by the user.
 */
export const checkSetTheme = () => {
  if(typeof window != "undefined" && localStorage.getItem("theme") == "dark") {
    return 'dark';
  } else {
    return 'light';
  }
}

/**
 * Function to check if the provided hex code has a valid color code format or not.
 * 
 * @param color - Hex code of the color
 * @returns - (boolean) if the string is a valid color or not.
 */
export const checkValidColor = (color: string) => /^#[0-9A-F]{6}$/i.test(color)

/**
 * Event listener that tracks the accent changes seamlessly when the user changes accent color
 * in the profile page.
 * 
 * @param setTheme_accent_present - (SetStateAction) a setter function that sets the accent of the app.
 * @returns - remove event listener.
 */
export const loadAccentClass = (setTheme_accent_present: any) => {
  const accentThemeChange = () => {
    const accent = localStorage.getItem('accent_theme');
    // console.info("Accent: ", accent);
    if(accent && checkValidColor(accent)) {
      setTheme_accent_present(accent);
    } else {
      // setTheme_accent_present('accent');
      setTheme_accent_present('#8765CC');
    }
  }
  accentThemeChange();
  window.addEventListener("accent_theme_changes", accentThemeChange);
  return () => window.removeEventListener("accent_theme_changes", accentThemeChange);
}


// export const getAccentCode = (theme_accent_present: any) => 
  // theme_colors.filter(color => color.color_class == theme_accent_present)[0]?.color_code

/**
 * This function is duplicate of the previous developed function.
 * Since the previous function posed too many complicated flows throughout the app
 * the function was simplified to this one.
 * 
 * @param theme_accent_present - mostly a string that contains the accent color of the app based on the selection made in the profile.
 * @returns - null
 */
export const getAccentCode = (theme_accent_present: any) => theme_accent_present;

/**
 * Handler function that executes color change over an HTML element (ideally a button)
 * when hovering over or away from the element.
 * 
 * @param id - unique identifier of the HTML element.
 * @param color - color to be displayed to be reflected on the HTML element when hovered on or out.
 * @param effect - ideally "mouse_over" is passed if an HTML element should have a color change on hover.
 * @returns - null
 */
export const hoverHandler = (id: string, color: string, effect: string) => 
  document.getElementById(id)!.style.backgroundColor = color+(effect == "mouse_over" ? "AD" :"");

/**
 * A Regex function that checks if the provided parameter is an email address or not.
 * 
 * @param email_id - Email address (type: string)
 * @returns - (boolean) if the provided email address is valid email or not.
 */
export const checkEmailValidity = (email_id: string) =>
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email_id || "");

/**
 * A Regex function to check if the provided string contains only alphabets and no other characters.
 * 
 * @param word - Word (type: string)
 * @returns - (boolean) if the string provided has only characters, it returns true. else false.
 */
export const checkOnlyCharacters = (word: string) => /^[A-Za-z]+$/.test(word || "");

/**
 * The function runs to check if all the keys in the object
 * has a value present. If the object has any key with empty values,
 * the function returns false. Else true.
 * 
 * @param obj - The object that has to be determined for empty values.
 * @returns - boolean result of the object.
 */
export const checkValuesObject = (obj: any) => {
  for (const key in obj) {
    if(obj[key] != "") {
      return false;
    }
  }

  return true;
}

/**
 * The parameters of the function above are the name of the cookie (cname), 
 * the value of the cookie (cvalue), and the number of days until the cookie should expire (exdays).
 * 
 * The function sets a cookie by adding together the cookiename, the cookie value, and the expires string.
 * 
 * @param cname - Cookie key for which the cookie data is to be set.
 * @param cvalue - Cookie value for which the cookie data is to be set.
 * @param exdays - Number of days after which the cookie will be expired. By default the value is 30 days.
 */
export const setCookie = (cname: string, cvalue: string, exdays=30) => {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  const expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

/**
 * Take the cookiename as parameter (cname).
 * Create a variable (name) with the text to search for (cname + "=").
 * Decode the cookie string, to handle cookies with special characters, e.g. '$'
 * Split document.cookie on semicolons into an array called ca (ca = decodedCookie.split(';')).
 * Loop through the ca array (i = 0; i < ca.length; i++), and read out each value c = ca[i]).
 * If the cookie is found (c.indexOf(name) == 0), return the value of the cookie (c.substring(name.length, c.length).
 * If the cookie is not found, return "".
 * 
 * @param cname - Cookie key for which the value has to be fetched.
 * @returns - the value of the given cookie key.
 */
export const getCookie = (cname: string) => {
  const name = cname + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

/**
 * Sets the value of the cookie to empty.
 * 
 * @param cname - Cookie key for which the value has to be deleted.
 * @returns - null.
 */
export const deleteCookie = (cname: string) => 
  document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;