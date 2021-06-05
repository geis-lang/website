import { Browser, Code } from '@geislabs/website-ui'
import {
    Hero,
    Feature,
    Blog,
    CTA,
    Content,
    LogoCloud,
} from '@geislabs/website-landing'
import { Header, Footer } from '@geislabs/website-layout'
import {
    getAllCases,
    getConfig,
    getAllReleases,
    Release,
    Usecase,
    getMostRecentPosts,
    BlogPost,
} from '@geislabs/website-content'
import { outdent } from 'outdent'
import React from 'react'

export interface HomeProps {
    title: string
    description: string
    posts: BlogPost[]
    cases: Usecase[]
    releases: Release[]
}

const Home: React.FC<HomeProps> = ({ cases, releases, ...props }) => {
    return (
        <div>
            <div className="bg-gray-800 h-screen">
                <Header className="bg-gray-800 h-20" />
                <Hero.Container
                    className=""
                    asset={
                        <Browser>
                            <Code className="prose">
                                {outdent`
                                    import { fetch } from 'geis'

                                    // Fetch google and parse as JSON
                                    const data = fetch('json://google.com', ({ data }) => ({
                                        title: data['title'].toString(),
                                        description: data['description'].toString(),
                                        summary: data['summary'].toString(),
                                        createdAt: data['created_at'].toDate()
                                    }))

                                    assert data === [{ title: 'jack' }, ...]
                                `}
                            </Code>
                        </Browser>
                    }
                >
                    <Hero.Content
                        title={
                            <>
                                <span className="md:block">
                                    Data to enrich your
                                </span>{' '}
                                <span className="text-primary-400 md:block">
                                    online business
                                </span>
                            </>
                        }
                    >
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                        irure qui lorem cupidatat commodo. Elit sunt amet fugiat
                        veniam occaecat fugiat aliqua ad ad non deserunt sunt.
                    </Hero.Content>
                </Hero.Container>
            </div>
            <div>
                <div className="bg-gray-50">
                    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                        <LogoCloud.List>
                            <LogoCloud.Item src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" />
                            <LogoCloud.Item src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" />
                            <LogoCloud.Item src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" />
                            <LogoCloud.Item src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg" />
                            <LogoCloud.Item src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg" />
                        </LogoCloud.List>
                    </div>
                </div>
            </div>
            <div>
                <Content.Container asset={<Content.Asset />}>
                    <Content.Main
                        subtitle="Transactions"
                        title="What makes us different"
                        action={<Content.Action>Learn More</Content.Action>}
                    >
                        Sagittis scelerisque nulla cursus in enim consectetur
                        quam. Dictum urna sed consectetur neque tristique
                        pellentesque. Blandit amet, sed aenean erat arcu morbi.
                        Cursus faucibus nunc nisl netus morbi vel porttitor
                        vitae ut. Amet vitae fames senectus vitae.
                    </Content.Main>
                </Content.Container>
            </div>
            <div className="bg-white">
                <Feature.List>
                    <Feature.Item
                        name="Invite team members"
                        description="You can manage phone, email and chat conversations all from a single mailbox."
                    />
                    <Feature.Item
                        name="List view"
                        description="You can manage phone, email and chat conversations all from a single mailbox."
                    />
                    <Feature.Item
                        name="Keyboard shortcuts"
                        description="You can manage phone, email and chat conversations all from a single mailbox."
                    />
                    <Feature.Item
                        name="Notifications"
                        description="Find what you need with advanced filters, bulk actions, and quick views."
                    />
                    <Feature.Item
                        name="Calendars"
                        description="You can manage phone, email and chat conversations all from a single mailbox."
                    />
                    <Feature.Item
                        name="Boards"
                        description="Find what you need with advanced filters, bulk actions, and quick views."
                    />
                    <Feature.Item
                        name="Reporting"
                        description="Find what you need with advanced filters, bulk actions, and quick views."
                    />
                    <Feature.Item
                        name="Mobile app"
                        description="Find what you need with advanced filters, bulk actions, and quick views."
                    />
                </Feature.List>
            </div>
            <div className="bg-gray-50">
                <CTA.Container>
                    <CTA.Action
                        title={
                            <>
                                <span className="block">Ready to dive in?</span>
                                <span className="block">
                                    Start your free trial today.
                                </span>
                            </>
                        }
                    >
                        <CTA.Button>Get started</CTA.Button>
                        <CTA.Button variant="secondary">Learn more</CTA.Button>
                    </CTA.Action>
                </CTA.Container>
            </div>
            <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
                <Blog.List header={<Blog.Subscribe />}>
                    {props.posts.map((post) => (
                        <Blog.Item key={post.title} post={post} />
                    ))}
                </Blog.List>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const config = await getConfig()
    const cases = await getAllCases()
    const releases = await getAllReleases()
    const recentPosts = await getMostRecentPosts(4)
    return {
        props: {
            cases: cases.slice(0, 3),
            releases: releases,
            title: config.title,
            description: config.description,
            posts: recentPosts,
        },
    }
}

export default Home
