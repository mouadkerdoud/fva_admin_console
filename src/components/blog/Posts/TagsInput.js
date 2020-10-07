import React,{useState} from 'react'
import "./Posts.css"


const TagsInput = props => {
	const selectedTags = ()=>{return}
	const [tags, setTags] = useState(props.tags);
	const removeTags = indexToRemove => {
		setTags([...tags.filter((_, index) => index !== indexToRemove)]);
	};
	const addTags = event => {
		if (event.target.value !== "") {
			setTags([...tags, event.target.value]);
			selectedTags([...tags, event.target.value]);
			event.target.value = "";
		}
	};
	return (
		<div className="tags-input">
			<ul id="tags">
				{tags.map((tag, index) => (
					<li key={index} className="tag">
						<span className='tag-title'>{tag}</span>
						<span className='tag-close-icon'
							onClick={() => removeTags(index)}
						>
							x
						</span>
					</li>
				))}
			</ul>
			<input
                className="input-tags"
				type="text"
				onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
				placeholder="Enter tags"
			/>
		</div>
	);
};export default TagsInput