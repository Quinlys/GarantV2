import React from 'react'
import './Add.css'
import {Dropdown, Form, Button} from "react-bootstrap";

const Add = (props) => {

    let typeSellText = 'Не вибрано';
    let typeBuildText = 'Не вибрано';
    let countOfRoomsText = 'Не вибрано';
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

    const addHouseToDB = () => {
        let longDescription = document.getElementById('longDescription').value;
        let description = document.getElementById('description').value;
        let price = document.getElementById('price').value;
        let address = document.getElementById('address').value;
        let imagesFields = document.getElementsByClassName('imagesField');
        let images = [];
        for (let i = 0; i < imagesFields.length; i++) {
            images.push(imagesFields[i].value)
        }
        props.addHouseToDB(images, props.typeSell, props.typeBuild, props.countRooms, longDescription, price, address, description)
    };



    let imgInputs = [];
    for (let i = 0; i < props.imgInputsFields; i++) {
        imgInputs[i] = <Form.Group className="photo" style={{marginTop: '20px'}}><Form.Control className='imagesField' type="text" placeholder="Посилання на фото" /></Form.Group>
    }



    return (
        <div className="container" style={{marginTop: '100px', marginBottom: '100px'}}>
            <div className="row">
                <div className="col-sm-12 col-md-4 text-center" style={{marginBottom: '15px'}}>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" style={{width: '230px'}}>
                            Виберіть тип збуту
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{width: '230px'}}>
                            <Dropdown.Item onClick={onChangeTypeOfSell}>Продаж</Dropdown.Item>
                            <Dropdown.Item onClick={onChangeTypeOfSell}>Оренда</Dropdown.Item>
                            <Dropdown.Item onClick={onChangeTypeOfSell}>Обмін</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="col-sm-12 col-md-4  text-center" style={{marginBottom: '15px'}}>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" style={{width: '230px'}}>
                            Виберіть тип будівлі
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{width: '230px'}}>
                            <Dropdown.Item onClick={onChangeTypeOfBuild}>Квартира</Dropdown.Item>
                            <Dropdown.Item onClick={onChangeTypeOfBuild}>Дача</Dropdown.Item>
                            <Dropdown.Item onClick={onChangeTypeOfBuild}>Будинок</Dropdown.Item>
                            <Dropdown.Item onClick={onChangeTypeOfBuild}>Гараж</Dropdown.Item>
                            <Dropdown.Item onClick={onChangeTypeOfBuild}>Земля</Dropdown.Item>
                            <Dropdown.Item onClick={onChangeTypeOfBuild}>Комерційна нерухомість</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="col-sm-12 col-md-4 text-center" style={{marginBottom: '15px'}}>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" style={{width: '230px'}}>
                            Виберіть кількість кімнат
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{width: '230px'}}>
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
                <Form.Control type="text" placeholder="Адреса" id='address' />
            </Form.Group>
            <Form.Group className="price" style={{marginTop: '20px'}}>
                <Form.Control type="text" placeholder="Ціна" id='price'/>
            </Form.Group>
            <Form.Group className="description" style={{marginTop: '20px'}}>
                <Form.Control type="text" placeholder="Короткий опис" id='description' />
            </Form.Group>
            <Form.Group className="descriptionLong">
                <Form.Label>Повний опис</Form.Label>
                <Form.Control as="textarea" rows={3} id='longDescription' />
            </Form.Group>
            <Button className='addPhoto bg-success' onClick={addImgInputsFields}>Добавити поле для фото</Button>
            <div className="InputsPhoto">
                {
                    imgInputs
                }
            </div>
            <Button className='addPhoto bg-success' onClick={addHouseToDB}>Добавити будинок в список сайту</Button>

        </div>
    )
};

export default Add
