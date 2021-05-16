import React from 'react'
import './Add.css'
import {Dropdown, Form, Button} from "react-bootstrap";
import {
    addImgInputsFieldsActionCreator,
    changeCountOfRoomsActionCreator,
    changeTypeOfBuildActionCreator,
    changeTypeOfSellActionCreator
} from "../../../redux/admin-reducer";

const Add = (props) => {

    let imgInputs = [];
    for (let i = 0; i < props.state.imgInputsFields; i++) {
        imgInputs[i] = <Form.Group className="photo" style={{marginTop: '20px'}}><Form.Control type="text" placeholder="Посилання на фото" /></Form.Group>
    }

    let typeSellText = 'Не вибрано';
    let typeBuildText = 'Не вибрано';
    let countOfRoomsText = 'Не вибрано';


    const changeTypeOfSell = (event) => {
        props.dispatch(changeTypeOfSellActionCreator(event.target.innerHTML))

    };
    const changeTypeOfBuild = (event) => {
        props.dispatch(changeTypeOfBuildActionCreator(event.target.innerHTML))
    };
    const changeCountOfRooms = (event) => {
        props.dispatch(changeCountOfRoomsActionCreator(event.target.innerHTML))
    };
    const addImgInputsFields = () => {
        props.dispatch(addImgInputsFieldsActionCreator())
    };



    return (
        <div className="container" style={{marginTop: '100px', marginBottom: '100px'}}>
            <div className="row">
                <div className="col-4 text-center">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Виберіть тип збуту
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={changeTypeOfSell}>Продаж</Dropdown.Item>
                            <Dropdown.Item onClick={changeTypeOfSell}>Оренда</Dropdown.Item>
                            <Dropdown.Item onClick={changeTypeOfSell}>Обмін</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="col-4 text-center">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Виберіть тип будівлі
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={changeTypeOfBuild}>Квартира</Dropdown.Item>
                            <Dropdown.Item onClick={changeTypeOfBuild}>Дача</Dropdown.Item>
                            <Dropdown.Item onClick={changeTypeOfBuild}>Будинок</Dropdown.Item>
                            <Dropdown.Item onClick={changeTypeOfBuild}>Гараж</Dropdown.Item>
                            <Dropdown.Item onClick={changeTypeOfBuild}>Земля</Dropdown.Item>
                            <Dropdown.Item onClick={changeTypeOfBuild}>Комерційна нерухомість</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="col-4 text-center">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Виберіть кількість кімнат
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={changeCountOfRooms}>1</Dropdown.Item>
                            <Dropdown.Item onClick={changeCountOfRooms}>2</Dropdown.Item>
                            <Dropdown.Item onClick={changeCountOfRooms}>3</Dropdown.Item>
                            <Dropdown.Item onClick={changeCountOfRooms}>4+</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            <div className="row" style={{marginTop: '15px'}}>
                <div className="col-4 text-center">
                    {props.state.addItem.typeSell ? props.state.addItem.typeSell : typeSellText}
                </div>
                <div className="col-4 text-center">
                    {props.state.addItem.typeBuild ? props.state.addItem.typeBuild : typeBuildText}
                </div>
                <div className="col-4 text-center">
                    {props.state.addItem.countRooms ? props.state.addItem.countRooms : countOfRoomsText}
                </div>
            </div>
            <Form.Group className="address" style={{marginTop: '20px'}}>
                <Form.Control type="text" placeholder="Адреса" />
            </Form.Group>
            <Form.Group className="price" style={{marginTop: '20px'}}>
                <Form.Control type="text" placeholder="Ціна" />
            </Form.Group>
            <Form.Group className="description" style={{marginTop: '20px'}}>
                <Form.Control type="text" placeholder="Короткий опис" />
            </Form.Group>
            <Form.Group className="descriptionLong">
                <Form.Label>Повний опис</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button className='addPhoto bg-success' onClick={addImgInputsFields}>Добавити поле для фото</Button>
            <div className="InputsPhoto">
                {
                    imgInputs
                }
            </div>
            <Button className='addPhoto bg-success'>Добавити будинок в список сайту</Button>

        </div>
    )
};

export default Add
