import React, {useState} from 'react'
import "../styles/content.css"

export const Content = () => {
	const [fetched_data, set_fetched_data] = useState([])
	const [is_rendered, set_is_rendered] = useState(false)
	const url = "https://youtubeapp-fb07a.firebaseio.com/items.json"

	if (!is_rendered) {
		fetch(url)
		.then((response) => response.json())
		.then((data) => {
			console.log(data)
			set_is_rendered(true);
			set_fetched_data(data)
		});
	}

	// name, tag, url

	return (
		<div className='div-content' style={{paddingTop: "100px", textAlign: "center"}}>
			<h1>Data Fetched From API</h1>
			<div>
				{fetched_data.map((elem, i)=>{
					return <div className='content-item' key={i}>
						<div>Name: {elem.name}</div>
						<div>Tag: {elem.tag}</div>
						<a href={elem.url}>{elem.url}</a>
					</div>
				})}
			</div>
		</div>
	)
}
