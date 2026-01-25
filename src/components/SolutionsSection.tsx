"use client";
import React, { useState } from "react";
import DarkVariantExample from "./ServiceCarousel";
import CloseIcon from '@mui/icons-material/Close';

const services = [
		{
			title: "استشارات تسويقية متخصصة",
			info: "تقديم استشارات تسويقية مخصصة لحل مشكلاتك وتحقيق أهدافك.",
			features: ["تحليل الوضع الحالي", "توصيات عملية", "متابعة التنفيذ"],
			price: "خصيصًا",
			button: "اكتشف التفاصيل",
			link: "#",
		},
	{
		title: "إعداد الخطط لوسائل التواصل الاجتماعي",
		info: "شرح منهجي للخطط الاستراتيجية والتكتيكية مع أمثلة عملية.",
		features: [
			"خطة استراتيجية",
			"خطة تكتيكية",
			"أمثلة عملية",
		],
		price: "خصيصًا",
		button: "اكتشف التفاصيل",
		link: "#",
	},
	{
		title: "كتابة المحتوى",
		info: "عرض لأنواع المحتوى المُقدم وأهميته في بناء العلامة التجارية.",
		features: [
			"أنواع محتوى متعددة",
			"تعزيز العلامة التجارية",
			"كتابة احترافية",
		],
		price: "خصيصًا",
		button: "اكتشف التفاصيل",
		link: "#",
	},
	// ... add the rest of your services here in the same format ...
];


const SolutionsSection: React.FC = () => {
	const [open, setOpen] = useState<number | null>(null);
	const [showCarousel, setShowCarousel] = useState(false);
	const [closing, setClosing] = useState(false);
	const [closingCarousel, setClosingCarousel] = useState(false);

	return (
		<section className="w-full py-16 px-4" style={{ background: '#113c56' }}>
			<div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8">
				<h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary mb-2" style={{ fontFamily: 'TheYearOfTheCamel, Tajawal, Arial' }}>
					حلول تسويق رقمية شاملة
				</h2>
				<div className="flex flex-wrap justify-center gap-8 mt-8">
					{services.map((srv, i) => (
						<div className="plan" key={i}>
							<div className="inner">
								<span className="pricing">
									<span>
										{srv.price} <small>/ مخصص</small>
									</span>
								</span>
								<p className="title mt-6">{srv.title}</p>
								<p className="info">{srv.info}</p>
								<ul className="features">
									{srv.features.map((feature, idx) => (
										<li key={idx}>
											<span className="icon">
												<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
													<path d="M0 0h24v24H0z" fill="none"></path>
													<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
												</svg>
											</span>
											<span>{feature}</span>
										</li>
									))}
								</ul>
							</div>
							<div className="action mt-2 flex flex-col gap-2 sm:flex-row sm:gap-2">
								<button className="button m-0" onClick={() => setOpen(i)}>إكتشف التفاصيل</button>
								<button className="button m-0" onClick={() => setShowCarousel(true)}>طلب الخدمة</button>
							</div>
							{open === i && (
								<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={() => {
									setClosing(true);
									setTimeout(() => { setOpen(null); setClosing(false); }, 300);
								}}>
									<div className={`popup-card ${closing ? 'animate-zoomin' : 'animate-zoomout'} relative`} onClick={e => e.stopPropagation()}>
										<button className="absolute right-4 top-4 text-xl font-bold" onClick={() => {
											setClosing(true);
											setTimeout(() => { setOpen(null); setClosing(false); }, 300);
										}}><CloseIcon /></button>
										<div className="text-2xl font-bold mb-4 mt-4 text-white">{srv.title}</div>
										<div className="text-base text-white/90 mb-4">{srv.info}</div>
										<ul className="features mb-4">
											{srv.features.map((feature, idx) => (
												<li key={idx}>
													<span className="icon">
														<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
															<path d="M0 0h24v24H0z" fill="none"></path>
															<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
														</svg>
													</span>
													<span>{feature}</span>
												</li>
											))}
										</ul>
									</div>
								</div>
							)}
						</div>
					))}
				</div>

				{/* Carousel Modal */}
				{showCarousel && (
					<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={() => {
						setClosingCarousel(true);
						setTimeout(() => { setShowCarousel(false); setClosingCarousel(false); }, 300);
					}}>
						<div className={`popup-card ${closingCarousel ? 'animate-zoomin' : 'animate-zoomout'} relative w-full max-w-6xl min-h-[600px]`} onClick={e => e.stopPropagation()}>
							<button className="absolute right-4 top-4 text-xl font-bold" onClick={() => {
								setClosingCarousel(true);
								setTimeout(() => { setShowCarousel(false); setClosingCarousel(false); }, 300);
							}}><CloseIcon /></button>
							<DarkVariantExample />
						</div>
					</div>
				)}
			</div>
			<style jsx>{`
				@keyframes zoomout {
					0% { transform: scale(0.7); opacity: 0; }
					100% { transform: scale(1); opacity: 1; }
				}
				@keyframes zoomin {
					0% { transform: scale(1); opacity: 1; }
					100% { transform: scale(1.2); opacity: 0; }
				}
				.animate-zoomout {
					animation: zoomout 0.4s cubic-bezier(.4,2,.3,1) both;
				}
				.animate-zoomin {
					animation: zoomin 0.3s cubic-bezier(.4,2,.3,1) both;
				}
				.popup-card {
					background: linear-gradient(135deg, #113c56 80%, #1a2a3a 100%);
					border-radius: 24px;
					box-shadow: 0 8px 32px 0 rgba(44,62,80,0.18);
					padding: 32px 16px 24px 16px;
					max-width: 825px;
					min-width: 320px;
					min-height: 420px;
					color: #fff;
					position: relative;
				}
							 .plan {
								 border-radius: 16px;
								 box-shadow: 0 30px 30px -25px rgba(0, 38, 255, 0.205);
								 padding: 10px;
								 background-color: #fff;
								 color: #697e91;
								 max-width: 400px;
								 min-width: 340px;
							 }
							 .plan .inner {
								 min-height: 440px;
								 padding: 36px 28px 28px 28px;
							 }
				.plan strong {
					font-weight: 600;
					color: #425275;
				}
				.plan .inner {
					align-items: center;
					padding: 20px;
					padding-top: 40px;
					background-color: #ecf0ff;
					border-radius: 12px;
					position: relative;
				}
				.plan .pricing {
					position: absolute;
					top: 0;
					right: 0;
					background-color: #bed6fb;
					border-radius: 99em 0 0 99em;
					display: flex;
					align-items: center;
					padding: 0.625em 0.75em;
					font-size: 1.25rem;
					font-weight: 600;
					color: #425475;
				}
				.plan .pricing small {
					color: #707a91;
					font-size: 0.75em;
					margin-left: 0.25em;
				}
				.plan .title {
					font-weight: 600;
					font-size: 1.25rem;
					color: #425675;
				}
				.plan .title + * {
					margin-top: 0.75rem;
				}
				.plan .info + * {
					margin-top: 1rem;
				}
				.plan .features {
					display: flex;
					flex-direction: column;
				}
				.plan .features li {
					display: flex;
					align-items: center;
					gap: 0.5rem;
				}
				.plan .features li + * {
					margin-top: 0.75rem;
				}
				.plan .features .icon {
					background-color: #1FCAC5;
					display: inline-flex;
					align-items: center;
					justify-content: center;
					color: #fff;
					border-radius: 50%;
					width: 20px;
					height: 20px;
				}
				.plan .features .icon svg {
					width: 14px;
					height: 14px;
				}
				.plan .features + * {
					margin-top: 1.25rem;
				}
				.plan .action {
					width: 100%;
					display: flex;
					align-items: center;
					justify-content: end;
				}
				.plan .button {
					background-color: #6558d3;
					border-radius: 6px;
					color: #fff;
					font-weight: 500;
					font-size: 1.125rem;
					text-align: center;
					border: 0;
					outline: 0;
					width: 100%;
					padding: 0.625em 0.75em;
					text-decoration: none;
				}
				.plan .button:hover {
					background-color: #5346c8;
				}
				.plan .button:active {
					background-color: #4133B7;
				}
			`}</style>
		</section>
	);
}

export default SolutionsSection;
