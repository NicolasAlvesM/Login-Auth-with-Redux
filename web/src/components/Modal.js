import {Button,Modal} from 'react-bootstrap'
import {useRef} from 'react'
import api from '../services/api';
import Input from './Input'
import { useDispatch } from 'react-redux';
import { addInfo } from '../actions/dashboardAction';

function CenteredModal(props) {

    const dispatch = useDispatch()

    function handleWithUpdate(e){
        e.preventDefault()

        api.post('/company',{
            name:inputNameRef.current.value,
            cnpj:inputCnpjRef.current.value,
            description:inputDescRef.current.value   
        }).then(({data})=>{
            dispatch(addInfo(data.company))
            props.onHide()
        }).catch(err=>{
            alert('Erro')
        })
        
    }

    const inputNameRef = useRef(null)
    const inputCnpjRef = useRef(null)
    const inputDescRef = useRef(null)

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <form onSubmit={handleWithUpdate}>
        <Modal.Body>       
                    <Input ref={inputNameRef} name='inputName' label="Name" required/>
                    <Input ref={inputCnpjRef} name='inputCnpj' label="Cnpj" required/>
                    <Input ref={inputDescRef} name='inputDescription' label="Description" required/>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-lg btn-primary" type="submit">Save</Button>
        </Modal.Footer>
        </form>
      </Modal>
    );
  }
  export default CenteredModal;