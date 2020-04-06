import React from 'react'
import { Grid } from 'semantic-ui-react'
import { Form} from 'semantic-ui-react'


const renderImage = (props) => {
  if (!props.image) {
    return
  }

  return <img src={props.image} alt={props.alt} style={{
    borderRadius: `3px`,
    maxWidth: `50px`,
    display: `block`,
    margin: `auto`,
    width: `7vw`,
  }} />
}

const IconFormInput = (props) => (
  <Grid>
    <Grid.Row style={{
      alignItems: `center`,
      justifyContent: `space-between`
    }}>
      <Grid.Column width={props.imgSize || 1}>
        {renderImage(props)}
      </Grid.Column>
      <Grid.Column width={props.imgSize ? 16 - props.imgSize : 15}>
        <Form.Group widths='equal'>
          {props.children}
        </Form.Group>
      </Grid.Column>
    </Grid.Row>
  </Grid >
)

export default IconFormInput