import React, {Component} from 'react';
import img from "../Postcard/36F67090-6EF3-4FDA-A039-30F3B5755346.png";
import {Avatar} from 'antd';
import './index.less';
import {observer, inject} from 'mobx-react';

@inject('stores')
@observer
class BlogDetails extends Component {
    constructor(props) {
        super(props);
        // console.log("key", props.match.params.id);
        const currentBlogId=props.match.params.id;
        this.props.stores.blogStore.getBlogDetails(currentBlogId)
    }

    render() {
        const {blogStore} = this.props.stores;
        const {currentBlogData} = blogStore;
        return (
            <div className="blogDetails-page">
                <div className='header-img'>
                    <img src={img} alt="img"/>
                </div>
                <div className="text">
                    <div className="title">{currentBlogData.title}</div>
                    <div className="attribution">
                        <div className="avatar"
                             style={{
                                 background: '#ccc',
                                 backgroundImage: `url(${currentBlogData.avatar})`,
                                 backgroundSize:'100% 100%',
                                 width: 40,
                                 height: 40,
                                 textAlign:'center',
                                 borderRadius: '50%'
                             }}>
                            {currentBlogData.avatar === '' ? currentBlogData.name.substring(0,1) : ''}
                        </div>
                        <div className="attribution-message">
                            <span className="name">{currentBlogData.name}</span>
                            <span className="time">{currentBlogData.time}</span>
                        </div>
                    </div>
                    <p className="text-content">
                        {currentBlogData.content}
                    </p>
                </div>
            </div>
        )
    }
}

export default BlogDetails;
