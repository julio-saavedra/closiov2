'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
	label: string;
	links: FooterLink[];
}

const footerLinks: FooterSection[] = [
	{
		label: 'Product',
		links: [
			{ title: 'Features', href: '#product' },
			{ title: 'Automations', href: '#automations' },
			{ title: 'Analytics', href: '#analytics' },
			{ title: 'Security', href: '#security' },
			{ title: 'Pricing', href: '#pricing' }
		],
	},
	{
		label: 'Company',
		links: [
			{ title: 'About Us', href: '#' },
			{ title: 'Careers', href: '#' },
			{ title: 'Blog', href: '#' },
			{ title: 'Press Kit', href: '#' },
			{ title: 'Partners', href: '#agencies' }
		],
	},
	{
		label: 'Resources',
		links: [
			{ title: 'Documentation', href: '#' },
			{ title: 'Help Center', href: '#faq' },
			{ title: 'Tutorials', href: '#' },
			{ title: 'API Reference', href: '#' },
			{ title: 'Roadmap', href: '#roadmap' }
		],
	},
	{
		label: 'Legal',
		links: [
			{ title: 'Privacy Policy', href: '#' },
			{ title: 'Terms of Service', href: '#' },
			{ title: 'Cookie Policy', href: '#' },
			{ title: 'GDPR', href: '#' },
			{ title: 'Compliance', href: '#security' }
		],
	}
];

const socialLinks = [
	{ label: 'Twitter', href: '#' },
	{ label: 'LinkedIn', href: '#' },
	{ label: 'GitHub', href: '#' },
	{ label: 'Email', href: 'mailto:hello@closio.io' }
];

const scrollToTop = () => {
	window.scrollTo({ top: 0, behavior: 'smooth' });
};

export function Footer() {
	return (
		<footer className="relative w-full bg-gradient-to-b from-[#1A1F2E]/50 to-[#0B0F14] border-t border-white/12 rounded-t-[3rem]">
			{/* Subtle top border glow */}
			<div className="absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 blur" />

			<div className="max-w-[calc(100vw-12rem)] mx-auto px-6 py-16">
				<div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
					{/* Brand Section */}
					<AnimatedContainer className="space-y-4">
						<div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2C66FF] to-[#2B4FB3]">
							CLOSIO
						</div>
						<p className="text-[#A8B3C7] leading-relaxed max-w-sm">
							The proprietary CRM built exclusively for life insurance professionals. 
							Close more deals, track commissions clearly, and grow your agency with confidence.
						</p>
						
						{/* Newsletter Signup */}
						<div className="mt-6">
							<h4 className="font-semibold mb-3 text-white">Stay Updated</h4>
							<div className="flex">
								<input
									type="email"
									placeholder="Enter your email"
									className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-l-lg focus:border-[#2C66FF] focus:ring-2 focus:ring-[#2C66FF]/20 outline-none transition-all text-sm text-white placeholder-[#A8B3C7]"
								/>
								<button className="px-4 py-2 bg-gradient-to-r from-[#2C66FF] to-[#2B4FB3] rounded-r-lg hover:scale-105 transition-all text-sm">
									→
								</button>
							</div>
						</div>

						{/* Social Links */}
						<div className="flex space-x-4 pt-4">
							{socialLinks.map((social, index) => (
								<a
									key={index}
									href={social.href}
									aria-label={social.label}
									className="px-3 py-2 bg-white/10 rounded-lg hover:bg-[#2C66FF] transition-all hover:scale-110 text-xs"
								>
									{social.label}
								</a>
							))}
						</div>

						<p className="text-[#A8B3C7] text-sm pt-4">
							© {new Date().getFullYear()} Closio. All rights reserved.
						</p>
					</AnimatedContainer>

					{/* Footer Links */}
					<div className="grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2">
						{footerLinks.map((section, index) => (
							<AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
								<div>
									<h4 className="font-semibold mb-4 text-white text-sm">{section.label}</h4>
									<ul className="space-y-2">
										{section.links.map((link) => (
											<li key={link.title}>
												<a
													href={link.href}
													className="text-[#A8B3C7] hover:text-white transition-colors text-sm inline-flex items-center"
												>
													{link.icon && <link.icon className="me-1 size-4" />}
													{link.title}
												</a>
											</li>
										))}
									</ul>
								</div>
							</AnimatedContainer>
						))}
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="pt-8 mt-8 border-t border-white/12 flex flex-col md:flex-row justify-between items-center">
					<div className="text-[#A8B3C7] text-sm mb-4 md:mb-0">
						Made for life insurance professionals
					</div>
					<button
						onClick={scrollToTop}
						className="w-10 h-10 bg-white/10 hover:bg-[#2C66FF] rounded-lg flex items-center justify-center transition-all hover:scale-110 text-xl"
						aria-label="Back to top"
					>
						↑
					</button>
				</div>
			</div>
		</footer>
	);
}

type ViewAnimationProps = {
	delay?: number;
	className?: ComponentProps<typeof motion.div>['className'];
	children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
}