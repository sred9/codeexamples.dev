import React from 'react';


const formStyle = {
    marginBottom: "2rem",
    padding: "0.7rem",
    paddingBottom: .01,
    background: "#fff",
    boxShadow: "0px -1px 6px 0px rgb(136, 136, 136)",
    borderBottom: "6px solid #ccc"
}

export default () => {
    return (
        <div style={formStyle}>
            <form
                action="https://tinyletter.com/codeexamples"
                method="post"
                target="popupwindow"
                onSubmit={() =>
                    window.open(
                        'https://tinyletter.com/codeexamples',
                        'popupwindow'
                    )
                }
                className={"embeddable-buttondown-form "}
            >
                <h4>Get our latest updates</h4>

                <div>
                    <label htmlFor="bd-email" className="label">
                        Email
                                </label>
                    <input
                        type="email"
                        name="email"
                        id="bd-email"
                        className="email"
                        placeholder="user@email.com"
                        required
                        style={{ width: "11rem" }}
                    />
                </div>
                <div> <input type="hidden" value="1" name="embed" /></div>
                <div> <input type="submit" className="subs" style={{ border: "1px solid #b3adad", margin: "1rem auto", fontWeight: "400", color: 'rgba(0, 0, 0, 0.86)', background: 'rgb(230, 234, 168)', marginLeft: '1rem' }} value="Send me" /></div>
            </form>
        </div>
    )
}