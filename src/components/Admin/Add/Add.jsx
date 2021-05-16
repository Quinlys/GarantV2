import React from 'react'
import './Add.css'
import {Dropdown, Form, Button} from "react-bootstrap";

const Add = (props) => {

    let imgInputs = [];
    for (let i = 0; i < props.imgInputsFields; i++) {
        imgInputs[i] = <Form.Group className="photo" style={{marginTop: '20px'}}><Form.Control type="text" placeholder="Посилання на фото" /></Form.Group>
    }

    let typeSellText = 'Не вибрано';
    let typeBuildText = 'Не вибрано';
    let countOfRoomsText = 'Не вибрано';
    debugger;
    const onChangeTypeOfSell = (event) => {
        props.changeTypeOfSell(event.target.innerHTML)
    };
    const onChangeTypeOfBuild = (event) => {
        props.changeTypeOfBuild(event.target.innerHTML)
    };
    const onChangeCountOfRooms = (event) => {
        props.changeCountOfRooms(event.target.innerHTML)
    };
    const addImgInputsFields = () => {
        props.addImgInputsFields();
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
                            <Dropdown.Item onClick={onChangeTypeOfSell}>Продаж</Dropdown.Item>
                            <Dropdown.Item onClick={onChangeTypeOfSell}>Оренда</Dropdown.Item>
                            <Dropdown.Item onClick={onChangeTypeOfSell}>Обмін</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="col-4 text-center">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Виберіть тип будівлі
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={onChangeTypeOfBuild}>Квартира</Dropdown.Item>
                            <Dropdown.Item onClick={onChangeTypeOfBuild}>Дача</Dropdown.Item>
                            <Dropdown.Item onClick={onChangeTypeOfBuild}>Будинок</Dropdown.Item>
                            <Dropdown.Item onClick={onChangeTypeOfBuild}>Гараж</Dropdown.Item>
                            <Dropdown.Item onClick={onChangeTypeOfBuild}>Земля</Dropdown.Item>
                            <Dropdown.Item onClick={onChangeTypeOfBuild}>Комерційна нерухомість</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="col-4 text-center">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Виберіть кількість кімнат
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={onChangeCountOfRooms}>1</Dropdown.Item>
                            <Dropdown.Item onClick={onChangeCountOfRooms}>2</Dropdown.Item>
                            <Dropdown.Item onClick={onChangeCountOfRooms}>3</Dropdown.Item>
                            <Dropdown.Item onClick={onChangeCountOfRooms}>4+</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            <div className="row" style={{marginTop: '15px'}}>
                <div className="col-4 text-center">
                    {props.typeSell ? props.typeSell : typeSellText}
                </div>
                <div className="col-4 text-center">
                    {props.typeBuild ? props.typeBuild : typeBuildText}
                </div>
                <div className="col-4 text-center">
                    {props.countRooms ? props.countRooms : countOfRoomsText}
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
