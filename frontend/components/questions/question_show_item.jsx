import React from 'react';
import ReactQuill, { Quill, Mixin, Toolbar } from 'react-quill';
import UserTag from '../users/user_tag';

class QuestionShowItem extends React.Component {
  constructor(props) {
    super(props);
  }

  deleteAndRedirect(entity, history){
    if (entity.title) {
      this.props.deleteQuestion(entity.id)
      .then(() => {
        return (
          history.push(`/questions`)
        );
      });
    } else {
      this.props.deleteAnswer(this.props.questionId, entity.id);
    }
  }

  renderDelete(entity) {
    const currentUser = this.props.currentUser || { id: null };
    let isOwner = false;
    if (entity) isOwner = (currentUser.id === entity.author_id);

    return (
      isOwner ?
      <div className='user-buttons'>
        <button className='user-buttons-edit'>Edit</button>

        <button
          className='user-buttons-delete'
          onClick={ () => this.deleteAndRedirect(entity, this.props.history) }>
          Delete
        </button>
      </div>
      :
      null
    );
  }

  render() {
    return (
      <div className='q-s-content'>
        <div className='q-s-votes'>
          <button
            className="q-upvote"
            onClick={() => this.props.upvote(this.props.type, this.props.entity, this.props.entity.id)}>
            <i className="fas fa-caret-up"></i>
          </button>

          <p className='q-s-votes-number'>{ this.props.entity.votes }</p>

          <button
            className="q-downvote"
            onClick={() => this.props.downvote(this.props.type, this.props.entity, this.props.entity.id)}>
            <i className="fas fa-caret-down"></i>
          </button>
        </div>

        <div className='q-s-body'>
          <ReactQuill
            value={ this.props.entity.body }
            readOnly
            modules={ {toolbar: null} } />
        </div>

        { this.renderDelete(this.props.entity) }

        <UserTag
          className='q-author'
          contentType={ this.props.type }
          author={ this.props.author }
          time={ this.props.entity.created_at } />
      </div>
    );
  }
}

export default QuestionShowItem;
