import { Col, Row, Input, Button } from "antd";
import Layout from "antd/lib/layout/layout";
import React, { useState, useEffect } from "react";
import "../styles/layout.css";
import MainSiderMenu from "../components/MainSiderMenu";
import { auth, db, storage } from "../fb";
import ItemPets from "../components/ItemPets";
import ItemFood from "../components/ItemFood";
import ItemService from "../components/ItemService";
import ItemAccesory from "../components/ItemAccesory";

const { Search } = Input;

const onSearch = (value) => console.log(value);

const SearchPage = () => {
    const [petsList, setPetsList] = useState([]);
    const [foodList, setFoodList] = useState([]);
    const [serviceList, setServiceList] = useState([]);
    const [accesoryList, setAccesoryList] = useState([]);
    const [element, setElement] = useState("");
    const [search, setSearch] = useState("");

    useEffect(() => {
        const getPets = async () => {
            await db.ref("pets").once("value", (snapshot) => {
                const temp = [];
                snapshot.forEach((childSnapshot) => {
                    temp.push({ id: childSnapshot.key, ...childSnapshot.val() });
                    console.log("temp--pet", temp);
                });
                setPetsList(temp);
                console.log("pets", petsList);
            });
        };
        const getFood = async () => {
            await db.ref("food").once("value", (snapshot) => {
                const temp = [];
                snapshot.forEach((childSnapshot) => {
                    temp.push({ id: childSnapshot.key, ...childSnapshot.val() });
                    console.log("temp-food", temp);
                });
                setFoodList(temp);
                console.log("food", foodList);
            });
        };
        const getAccesory = async () => {
            await db.ref("accesory").once("value", (snapshot) => {
                const temp = [];
                snapshot.forEach((childSnapshot) => {
                    temp.push({ id: childSnapshot.key, ...childSnapshot.val() });
                    console.log("temp-acce", temp);
                });
                setAccesoryList(temp);
                console.log("accesory", accesoryList);
            });
        };
        const getService = async () => {
            await db.ref("service").once("value", (snapshot) => {
                const temp = [];
                snapshot.forEach((childSnapshot) => {
                    temp.push({ id: childSnapshot.key, ...childSnapshot.val() });
                    console.log("temp-serv", temp);
                });
                setServiceList(temp);
                console.log("service", serviceList);
            });
        };
        getPets();
        getFood();
        getService();
        getAccesory();
        return () => {
            db.ref("pets").off();
            db.ref("food").off();
            db.ref("accesory").off();
            db.ref("service").off();
        };
    }, [search]);

    const onSearch = (value) => {
        setSearch(value);
        console.log("pet", element);
        setElement("");
    };

    return (
        <>
            <Row justify="center">
                <Col span={4} pull={1}>
                    <Layout>
                        <MainSiderMenu />
                    </Layout>
                </Col>
                <Col span={16}>
                    <Search
                        value={element}
                        defaultValue={element}
                        onChange={(e) => {
                            console.log("e", e.target.value);
                            setElement(e.target.value);
                        }}
                        enterButton
                        onSearch={onSearch}
                        onPressEnter={onSearch}
                        style={{
                            width: "500px",
                            marginLeft: "250px",
                            marginTop: "40px",
                            marginBottom: "20px",
                        }}
                    />
                    {petsList !== 0 ? <ItemPets pets={petsList} /> : "NO HAY RESULTADOS"}
                    {foodList !== 0 ? <ItemFood foods={foodList} /> : "NO HAY RESULTADOS"}
                    {serviceList !== 0 ? (
                        <ItemService services={serviceList} />
                    ) : (
                        "NO HAY RESULTADOS"
                    )}
                    {accesoryList !== 0 ? (
                        <ItemAccesory accesories={accesoryList} />
                    ) : (
                        "NO HAY RESULTADOS"
                    )}
                </Col>
                <Col span={2} style={{ marginTop: "40px", marginBottom: "20px" }}>
                    <Button type="primary" href="/category">
                        Publicar
                    </Button>
                </Col>
            </Row>
            {/* <Row>
        <Col>
          {petsList > 0 ? (
            <ItemPets pets={petsList} />
          ) : (
            "NO HAY RESULTADOS"
          )}
        </Col>
      </Row> */}
        </>
    );
};


export default SearchPage;
