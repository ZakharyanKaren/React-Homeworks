import React from 'react';
import styles from './posts.module.css';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  button: {
    marginTop: '40px',
  },
  textArea: {
    width: '400px',
    marginTop: '20px',
  },
});

class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { addPost } = this.props;
    const { classes } = this.props;
    
    return (
      <div className={styles.postComponent}>
        <div className={styles.createPostWrapper}>
          <TextField
            onChange={this.onChange}
            name="title"
            value={this.state.title}
            id="standard-basic"
            label="Standard"
            className={classes.textArea}
          />
          <TextField
            onChange={this.onChange}
            name="description"
            value={this.state.description}
            id="standard-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            className={classes.textArea}
          />
          <Button
            onClick={() => addPost(this.state.title, this.state.description)}
            color="primary"
            variant="contained"
            className={classes.button}
          >
            Create Post
          </Button>
        </div>
      </div>
    );
  }
}

const PostsSection = (props) => {
  const classes = useStyles();

  return <Posts classes={classes} addPost={props.addPost} />;
};
export default PostsSection;
