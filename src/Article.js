import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

export class Article extends React.Component {

  state = {
    posts: [
      {title: "First Article", body: "Here is some text"},
      {title: "Second Article", body: "Here is some text"},
      {title: "Third Article", body: "Here is some text"},
      {title: "Fourth Article", body: "Here is some text"}
      ]
  }

  render() {
    return (
      this.state.posts.map( post => (
      <div>
        <Card style={{ width: '60%' }}>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>
              {post.body}
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
        <br/>
      </div>
      ))
    )
  }
}