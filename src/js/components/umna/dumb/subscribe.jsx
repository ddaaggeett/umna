import React from 'react'

const Subscribe = () => {

    return (
        <form
            action="http://groups.google.com/group/UMNA-News/boxsubscribe">
            <input
                className="form_item"
                id="form_submit"
                type="submit"
                name="sub"
                defaultValue="Subscribe to our mailing list" />
            <input
                className="form_item"
                type="hidden"
                name="hl"
                defaultValue="en" />
            <input
                className="form_item"
                id="email"
                placeholder="your email address"
                type="text"
                name="email" />
        </form>
    )
}

export default Subscribe
