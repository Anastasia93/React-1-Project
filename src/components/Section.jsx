export default function Section({ title, children, ...props }) {
    return (
        <section { ...props }>
          <title>{title}</title>
          {children}
        </section>
    );
}