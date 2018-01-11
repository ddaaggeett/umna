import React from 'react'
import MediaQuery from 'react-responsive'

const Subscribe = () => {

    return (
        <div>
            <MediaQuery maxWidth={991}>
                <form  className="welcome_mat_item_mobile"
                    action="http://groups.google.com/group/UMNA-News/boxsubscribe">
                    <input
                        className="form_item_mobile"
                        id="form_submit"
                        type="submit"
                        name="sub"
                        defaultValue="Subscribe to our mailing list" />
                    <input
                        className="form_item_mobile"
                        type="hidden"
                        name="hl"
                        defaultValue="en" />
                    <input
                        className="form_item_mobile"
                        id="email"
                        placeholder="your email address"
                        type="text"
                        name="email" />
                </form>
            </MediaQuery>

            <MediaQuery minWidth={992}>
                <form id="form"
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
            </MediaQuery>
        </div>
    )
}

export default Subscribe
