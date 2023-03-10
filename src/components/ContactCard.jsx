import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ContactCard({ item, handleDelete, handleEdit }) {
  return (
    <Card className="card-border-top">
      <Card.Body className="card-body">
        <Card.Text>
          <div className="card-img"></div>
          Name: {item.name} <br />
          Surname:{item.surname} <br />
          Phone:{item.phone} <br />
          Email:{item.email}
        </Card.Text>
        <Button onClick={() => handleDelete(item.id)} variant="dark">
          Delete
        </Button>
        <Button onClick={() => handleEdit(item.id)} variant="dark">
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ContactCard;
