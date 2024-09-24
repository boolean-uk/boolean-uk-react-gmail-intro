import React from "react";

const InboxList = () => {
    const inboxItems = [
        {id: 1, classname: "item active", name: "Inbox", count: 3 },
        {id: 2, classname: "item", name: "Starred", count: 2 },
    ]
    return (
        <ul className="inbox-list">
            { inboxItems.map((item) => (
                <li key={item.id} className={item.classname}>
                    <span className="label">{item.name}</span>
                    <span className="count">{item.count}</span>
                </li>
            ))}
            <li className="item toggle">
                <label htmlFor="hide-read">Hide read</label>
                <input id="hide-read" type="checkbox" checked={false} />
            </li>
        </ul>
    );
}

export default InboxList;