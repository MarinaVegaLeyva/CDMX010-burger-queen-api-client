import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
//import "react-tabs/style/react-tabs.css";
import "./table.css";
import ProductCard from "../ProductCard/ProductCard";
import React, { useEffect, useState } from "react";

const Table = ({ handleAddProducts }) => {
	let [data, setData] = useState();
	let [dinner, setDinner] = useState();
	let [extra, setExtra] = useState();
	let [drink, setDrink] = useState();
	let getData = async () => {
		let url = "http://localhost:3004/db";
		let getFectchData = await fetch(url).then((resul) => resul.json());
		let filterBreakfast = getFectchData.products.filter(
			(element) => element.type === "Breakfast"
		);
		setData(filterBreakfast);
		let filterDinner = getFectchData.products.filter(
			(element) => element.type === "Dinner"
		);
		setDinner(filterDinner);
		let filterExtra = getFectchData.products.filter(
			(element) => element.type === "Extra"
		);
		setExtra(filterExtra);
		let filterDrink = getFectchData.products.filter(
			(element) => element.type === "Drink"
		);
		setDrink(filterDrink);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div>
			<Tabs>
				<TabList>
					<Tab>
						<h2>DESAYUNOS</h2>
					</Tab>
					<Tab>
						<h2>ALMUERZO/CENA</h2>
					</Tab>
				</TabList>
				<TabPanel>
					<div className="contentTable">
						{data &&
							data.map((product) => (
								<ProductCard
									product={product}
									key={product.id}
									handleAddProducts={handleAddProducts}
								/>
							))}
					</div>
				</TabPanel>
				<TabPanel>
					<div className="contentTable">
						{dinner &&
							dinner.map((product) => (
								<ProductCard
									product={product}
									key={product.id}
									handleAddProducts={handleAddProducts} />
							))}
						<h2>Acompañamientos</h2>
						{extra &&
							extra.map((product) => (
								<ProductCard
									product={product}
									key={product.id}
									handleAddProducts={handleAddProducts} />
							))}
						<h2>Para tomar</h2>
						{drink &&
							drink.map((product) => (
								<ProductCard
									product={product}
									key={product.id}
									handleAddProducts={handleAddProducts} />
							))}
					</div>
				</TabPanel>
			</Tabs>
		</div>
	);
};

export default Table;
