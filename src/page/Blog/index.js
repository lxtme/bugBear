import React, {Component} from 'react';
import CommonNav from "../HomePage/CommonNav";
import Postcard from "./Postcard";
import './index.less';
import {withRouter} from 'react-router-dom';
import {inject, observer} from 'mobx-react';

@inject('stores')
@observer
class Blog extends Component {
    constructor(props) {
        super(props);
        this.props.stores.blogStore.getBlogListData();
    }

    render() {
        const bloglist = [];
        this.props.stores.blogStore.blogdata.map((blogitem, index) => {
            bloglist.push(
                <Postcard
                    key={index} className="postcard"
                    onClick={() => {
                        this.props.stores.blogStore.setCurrentBlogData(blogitem);
                        this.props.history.push('blogdetails/' + blogitem.id)
                    }}
                    content={blogitem.hasOwnProperty('content') ? blogitem.content.substr(0, 80) + '...' : ''}
                    title={blogitem.title}
                    avatar={blogitem.avatar}
                    time={blogitem.time}
                    name={blogitem.name}/>
            );
            return blogitem;
        });
        return (
            <div className="blog-page">
                <CommonNav className="commonNav"/>
                <div className="blog-list">
                    {bloglist}
                </div>
                <span className="next-page">Next page</span>
            </div>
        )
    }
}

export default withRouter(Blog);
